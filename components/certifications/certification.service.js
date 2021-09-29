const Service = require('../../base/Service');
const CertificationDAL = require('./certification.DAL');

class CertificationService extends Service {
  constructor() {
    super(CertificationDAL);
  }
}

module.exports = new CertificationService();
