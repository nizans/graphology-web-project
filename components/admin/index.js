const ComponentRouter = require('../../base/ComponentRouter');
const AdminController = require('./admin.controller');

class AdminRouter extends ComponentRouter {
  constructor() {
    super(AdminController);

  }


}

module.exports = new AdminRouter().router;
