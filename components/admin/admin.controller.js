const Controller = require('../../base/Controller');
const AdminService = require('./admin.service');

class AdminController extends Controller {
  constructor() {
    super(AdminService);
  }
}

module.exports = new AdminController();
