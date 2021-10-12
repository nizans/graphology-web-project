const Service = require('../../base/Service');
const { JWT_RESET_PASSWORD_KEY, RESET_PASSWORD_EXPIRATION } = require('../../config/constants');
const { createToken, verifyToken, getAccessAndRefreshToken } = require('../../utils/jwtHelpers');
const refreshTokenDAL = require('../refreshTokens/refreshToken.DAL');
const AdminDAL = require('./admin.DAL');
const send = require('../../lib/mailer/mailer');
const { passwordResetRequestTemplate, newPasswordTemplate } = require('../../lib/mailer/htmlGenerate');
const generateUniqueID = require('../../utils/generateUniqueID');
const mailService = require('../mail/mail.service');
const { isValidObjectId } = require('mongoose');
const { INVALID_MONGO_ID } = require('../error/error.constants');
const {
  createAdminValidation,
  updateAdminValidation,
  loginValidation,
  forgotPasswordValidation,
} = require('./admin.validation');

const strings = {
  passwordReset: 'בקשה לאיפוס סיסמא',
  passwordResetSuccess: 'סיסמא אופסה',
};

class AdminService extends Service {
  constructor() {
    super(AdminDAL);
    this.mailService = mailService;
  }

  async delete(id) {
    const { email } = await super.delete(id);
    await this.mailService.delete(email);
    return;
  }

  async getById(id) {
    if (!isValidObjectId(id)) throw INVALID_MONGO_ID(id);
    const { _id, name, email } = await super.getById(id);
    const mailPermissions = await this.mailService.getMailPermissionsByEmail(email);
    return { _id, name, email, mailPermissions };
  }

  async create(data) {
    if (data.mailPermissions) {
      await this.mailService.createOrUpdate(data.email, data.mailPermissions);
      delete data.mailPermissions;
    }
    await createAdminValidation.validateAsync(data);
    return await super.create(data);
  }

  async update(id, data) {
    await updateAdminValidation.validateAsync(data);
    if (data.mailPermissions) {
      await this.mailService.createOrUpdate(data.email, data.mailPermissions);
      delete data.mailPermissions;
    }
    return await super.update(id, data);
  }

  async login(data) {
    await loginValidation.validateAsync(data);
    const { email, password } = data;
    const admin = await this.DAL.login(email, password);
    const tokens = getAccessAndRefreshToken(admin.toJSON());
    await refreshTokenDAL.setRefreshToken(email, tokens.refreshToken);
    return {
      refreshToken: tokens.refreshToken,
      accessToken: tokens.accessToken,
      email: admin.email,
      name: admin.name,
      _id: admin._id,
    };
  }

  async logout(data) {
    const { email } = data;
    const result = await refreshTokenDAL.removeAllEmailTokens(email);
    return result;
  }

  async forgotPassword(email) {
    await forgotPasswordValidation.validateAsync({ email });
    const resetToken = createToken({ email: email }, JWT_RESET_PASSWORD_KEY, RESET_PASSWORD_EXPIRATION);
    const result = await this.DAL.setResetToken(email, resetToken);
    await this.#sendPasswordResetMail(resetToken, email);
    await this.logout({ email });
    return result;
  }

  async resetPassword(token) {
    const { email } = verifyToken(token, JWT_RESET_PASSWORD_KEY);
    const { passwordResetToken } = await this.DAL.getResetToken(email);
    if (token !== passwordResetToken) throw new Error();
    const newPassword = generateUniqueID(4, '').toUpperCase();
    const result = await this.DAL.resetPassword(email, newPassword);
    await this.#sendNewPasswordMail(newPassword, email);
    await this.DAL.clearResetToken(email);
    return result;
  }

  #sendPasswordResetMail = async (token, email) => {
    const html = passwordResetRequestTemplate(token);
    const info = await send({ html: html, to: email, subject: strings.passwordReset });
    return info;
  };

  #sendNewPasswordMail = async (newPassword, email) => {
    const html = newPasswordTemplate(newPassword);
    const info = await send({ html: html, to: email, subject: strings.passwordResetSuccess });
    return info;
  };
}

module.exports = new AdminService();
