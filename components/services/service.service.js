const Service = require('../../base/Service');
const ServiceDAL = require('./service.DAL');

class ServiceService extends Service {
  constructor() {
    super(ServiceDAL);
  }
}

module.exports = new ServiceService();
