const Controller = require('../../base/Controller');
const { COOKIE_MAX_AGE } = require('../../config/constants');
const AdminService = require('./admin.service');

class AdminController extends Controller {
  constructor() {
    super(AdminService);
  }
}

module.exports = new AdminController();
