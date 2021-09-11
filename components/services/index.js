const ServiceController = require('./service.controller');
const ComponentRouter = require('../../base/ComponentRouter');

class ServiceRouter extends ComponentRouter {
  constructor() {
    super(ServiceController);
    super.initRoutes();
  }
}
module.exports = new ServiceRouter().router;
