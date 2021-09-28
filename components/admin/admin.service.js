const Service = require('../../base/Service');
const { JWT_RESET_PASSWORD_KEY, RESET_PASSWORD_EXPIRATION } = require('../../config/constants');
const { createToken, verifyToken, getAccessAndRefreshToken } = require('../../utils/jwtHelpers');
const refreshTokenDAL = require('../refreshTokens/refreshToken.DAL');
const AdminDAL = require('./admin.DAL');
const send = require('../../lib/mailer/mailer');
const { passwordResetRequestTemplate, newPasswordTemplate } = require('../../lib/mailer/htmlGenerate');
const ErrorHandle = require('../error/error.model');
const generateUniqueID = require('../../utils/generateUniqueID');

class AdminService extends Service {
  constructor() {
    super(AdminDAL);
  }

  async login(data) {
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
    const resetToken = createToken({ email: email }, JWT_RESET_PASSWORD_KEY, RESET_PASSWORD_EXPIRATION);
    const result = await this.DAL.setResetToken(email, resetToken);
    await this.#sendPasswordResetMail(resetToken);
    await this.logout({ email });
    return result;
  }

  // TODO: CREATE FRONEND PAGE FOR SUCCESSFUL PASSWORD RESET AND REDIRECT TO IT
  async resetPassword(token) {
    const { email } = verifyToken(token, JWT_RESET_PASSWORD_KEY);
    const { passwordResetToken } = await this.DAL.getResetToken(email);
    if (token !== passwordResetToken) throw new ErrorHandle(401, 'Tokens not matching');
    const newPassword = generateUniqueID(3, '').toUpperCase();
    const result = await this.DAL.resetPassword(email, newPassword);
    await this.#sendNewPasswordMail(newPassword);
    return result;
  }

  #sendPasswordResetMail = async token => {
    const html = passwordResetRequestTemplate(token);

    const info = await send(html);
    return info;
  };

  #sendNewPasswordMail = async newPassword => {
    const html = newPasswordTemplate(newPassword);
    const info = await send(html);
    return info;
  };
}

module.exports = new AdminService();
