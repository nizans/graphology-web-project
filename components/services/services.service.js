const ServiceDal = require('./services.DAL');

class ServiceService {
  async create(data) {
    return ServiceDal.add(data);
  }

  async delete(id) {
    return ServiceDal.delete(id);
  }

  async update(id) {
    return ServiceDal.update(id);
  }

  async getAll() {
    return ServiceDal.getAll();
  }

  async getById(id) {
    return ServiceDal.getById(id);
  }
}

module.exports = new ServiceService();
