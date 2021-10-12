const Service = require('../../base/Service');
const CertificationDAL = require('./certification.DAL');
const { createCertificationValidation } = require('./certifications.validation');
class CertificationService extends Service {
  constructor() {
    super(CertificationDAL);
  }

  async create(data) {
    await createCertificationValidation.validateAsync(data);
    return await super.create(data);
  }
}

module.exports = new CertificationService();
