const ComponentRouter = require('../../base/ComponentRouter');
const { protectRoute } = require('../../middleware/protectRoute');
const AdminController = require('./admin.controller');

class AdminRouter extends ComponentRouter {
  constructor() {
    super(AdminController);
  }

  initGet() {
    this.router.get('/', protectRoute, this.Controller.get.bind(this.Controller));
  }
  initgetById() {
    this.router.get('/:id', protectRoute, this.Controller.getById.bind(this.Controller));
  }
}

module.exports = new AdminRouter().router;
