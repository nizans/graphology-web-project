const Controller = require('../../base/Controller');
const AdminService = require('./admin.service');

class AdminController extends Controller {
  constructor() {
    super(AdminService);
  }

  async delete(req, res, next) {
    console.log(req.params.id);
    console.log(req.admin);
    super.delete(req, res, next);
  }
}

module.exports = new AdminController();
