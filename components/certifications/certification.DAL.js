const DAL = require('../../base/DAL');
const Certification = require('./certification.model');

class CertificationDAL extends DAL {
  constructor() {
    super(Certification, 'Certification');
  }
}
module.exports = new CertificationDAL();
