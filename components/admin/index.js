const ComponentRouter = require('../../base/ComponentRouter');
const AdminController = require('./admin.controller');

class AdminRouter extends ComponentRouter {
  constructor() {
    super(AdminController);
    this.initLogin();
  }

  initLogin() {
    this.router.post('/login', this.Controller.login.bind(this.Controller));
  }
}

module.exports = new AdminRouter().router;
