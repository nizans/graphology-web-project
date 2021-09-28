const DAL = require('../../base/DAL');
const { EMAIL_NOT_EXISTS, LOGIN_INCORRECT_PASS, EMAIL_ALREADY_EXISTS } = require('../error/error.constants');
const ErrorHandle = require('../error/error.model');
const adminModel = require('./admin.model');

class AdminDal extends DAL {
  constructor() {
    super(adminModel, 'Admin');
  }

  async login(email, password) {
    const admin = await this.Model.findOne({ email });
    if (!admin) throw LOGIN_INVALID_EMAIL;
    if (!(await admin.validatePassword(password))) throw LOGIN_INCORRECT_PASS;
    return await this.Model.findOne({ email }).select('name email _id');
  }

  async add(data) {
    try {
      const result = await super.add(data);
      return result;
    } catch (error) {
      if (error.code === 11000) throw EMAIL_ALREADY_EXISTS;
      throw error;
    }
  }

  async getResetToken(email) {
    const token = await this.Model.findOne({ email }).select('passwordResetToken');
    if (!token) throw new ErrorHandle(404, 'Password reset token not exists for this user');
    return token;
  }

  async setResetToken(email, token) {
    const filter = { email: email };
    const update = { $set: { passwordResetToken: token } };
    const result = await this.Model.findOneAndUpdate(filter, update, {
      returnOriginal: false,
    });
    if (!result) throw EMAIL_NOT_EXISTS;
    return result;
  }

  async resetPassword(email, newPassword) {
    const filter = { email: email };
    const update = { password: newPassword };
    const admin = await this.Model.findOne(filter);
    if (!admin) throw EMAIL_NOT_EXISTS;
    admin.password = newPassword;
    // const admin = await this.Model.findOneAndUpdate(filter, update, {
    //   returnOriginal: false,
    // });
    const result = await admin.save();
    return result;
  }
}

module.exports = new AdminDal();
