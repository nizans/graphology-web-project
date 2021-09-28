const ComponentRouter = require('../../base/ComponentRouter');
const { protectRoute } = require('../../middleware/protectRoute');
const AdminController = require('./admin.controller');

class AdminRouter extends ComponentRouter {
  constructor() {
    super(AdminController);
    this.initForgotPassword();
    this.initResetPassword();
  }

  initGet() {
    this.router.get('/', protectRoute, this.Controller.get.bind(this.Controller));
  }
  initgetById() {
    this.router.get('/:id', protectRoute, this.Controller.getById.bind(this.Controller));
  }

  initForgotPassword() {
    this.router.patch('/resetPassword', this.Controller.forgotPassword.bind(this.Controller));
  }

  initResetPassword() {
    this.router.get('/resetPassword/:token', this.Controller.resetPassword.bind(this.Controller));
  }
}

module.exports = new AdminRouter().router;
