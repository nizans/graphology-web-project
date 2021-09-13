const Controller = require('../../base/Controller');

const AdminService = require('./admin.service');

class AdminController extends Controller {
  constructor() {
    super(AdminService);
  }
  async login(req, res, next) {
    try {
      res.json(await this.Service.login(req.body));
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new AdminController();
