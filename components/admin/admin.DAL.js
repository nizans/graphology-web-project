const DAL = require('../../base/DAL');
const { LOGIN_INVALID_EMAIL, LOGIN_INCORRECT_PASS, EMAIL_ALREADY_EXISTS } = require('../error/error.constants');
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
    return await this.Model.findOne({ email }).select('name email');
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
}

module.exports = new AdminDal();
