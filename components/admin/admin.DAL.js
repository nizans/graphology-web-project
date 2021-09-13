const DAL = require('../../base/DAL');
const ErrorHandle = require('../error/error.model');
const adminModel = require('./admin.model');

class AdminDal extends DAL {
  constructor() {
    super(adminModel, 'Admin');
  }

  async login(email, password) {
    const admin = await this.Model.findOne({ email });

    if (!admin) throw new ErrorHandle(404, `Admin with email ${email} not found`);

    if (!(await admin.validatePassword(password))) throw new ErrorHandle(404, 'Wrong password');
    return await this.Model.findOne({ email }, 'name email');
  }
}

module.exports = new AdminDal();
