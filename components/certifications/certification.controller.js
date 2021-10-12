const Controller = require('../../base/Controller');
const CertificationService = require('./certification.service');

class CertificationController extends Controller {
  constructor() {
    super(CertificationService);
  }

  async update() {
    return;
  }
}
module.exports = new CertificationController();
