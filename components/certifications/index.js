const CertificationController = require('./certification.controller');
const ComponentRouter = require('../../base/ComponentRouter');

class CertificationRouter extends ComponentRouter {
  constructor() {
    super(CertificationController);
    super.initRoutes();
  }
}

module.exports = new CertificationRouter().router;
