const Service = require('./service.model');
const DAL = require('../../base/DAL');

class ServiceDAL extends DAL {
  constructor() {
    super(Service, 'Service');
  }
}

module.exports = new ServiceDAL();
