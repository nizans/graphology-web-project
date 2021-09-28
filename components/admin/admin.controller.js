const Controller = require('../../base/Controller');
const { CANNOT_DELETE_CURRECT_ADMIN } = require('../error/error.constants');
const ErrorHandle = require('../error/error.model');
const AdminService = require('./admin.service');

class AdminController extends Controller {
  constructor() {
    super(AdminService);
  }

  async delete(req, res, next) {
    try {
      if (req.params.id === req.admin._id) throw CANNOT_DELETE_CURRECT_ADMIN;
      super.delete(req, res, next);
    } catch (error) {
      next(error);
    }
  }

  async forgotPassword(req, res, next) {
    try {
      const email = req.body.email;
      if (!email) throw new ErrorHandle(404, 'No email was sent');
      const result = await this.Service.forgotPassword(email);
      res.status(201).send();
    } catch (error) {
      next(error);
    }
  }

  async resetPassword(req, res, next) {
    try {
      const token = req.params.token;
      if (!token) throw new ErrorHandle(400, 'No token');
      const result = await this.Service.resetPassword(token);
      res.status(201).send();
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new AdminController();
