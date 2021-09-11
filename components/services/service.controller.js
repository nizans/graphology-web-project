const Controller = require('../../base/Controller');
const ServiceService = require('./service.service');

class ServiceController extends Controller {
  constructor() {
    super(ServiceService);
  }
}
module.exports = new ServiceController();
