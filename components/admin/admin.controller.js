const Controller = require('../../base/Controller');
const { CANNOT_DELETE_CURRECT_ADMIN } = require('../error/error.constants');
const ErrorHandle = require('../error/error.model');
const AdminService = require('./admin.service');
const path = require('path');

class AdminController extends Controller {
  constructor() {
    super(AdminService);
  }

  async delete(req, res, next) {
    try {
      if (req.params.id === req.admin._id) throw CANNOT_DELETE_CURRECT_ADMIN;
      await super.delete(req, res, next);
    } catch (error) {
      next(error);
    }
  }

  async forgotPassword(req, res, next) {
    try {
      const email = req.body.email;
      if (!email) throw new ErrorHandle(404, 'No email was sent');
      await this.Service.forgotPassword(email);
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }

  async resetPassword(req, res, next) {
    try {
      const token = req.params.token;
      if (!token) throw new ErrorHandle(400, 'No token');
      await this.Service.resetPassword(token);
      path.join(__dirname, 'lib', 'mailer', 'passwordResetSeccess.html');
      res.status(201).sendFile(path.join(process.cwd(), 'lib', 'mailer', 'passwordResetSeccess.html'));
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new AdminController();
