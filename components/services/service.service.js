const Service = require('../../base/Service');
const ServiceDAL = require('./service.DAL');
const { createServiceValidation, updateServiceValidation } = require('./service.validation');

class ServiceService extends Service {
  constructor() {
    super(ServiceDAL);
  }

  async create(data) {
    // TODO - find more elegant fix
    if (data.images) delete data.images;
    await createServiceValidation.validateAsync(data);
    return await super.create(data);
  }

  async update(id, data) {
    // TODO - find more elegant fix
    if (data.images) delete data.images;
    await updateServiceValidation.validateAsync(data);
    return await super.update(id, data);
  }
}

module.exports = new ServiceService();
