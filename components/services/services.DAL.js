const Service = require('./services.model');
const ErrorHandle = require('../error/error.model');

class ServiceDAL {
  async add(data) {
    try {
      const service = new Service(data);
      return await service.save();
    } catch (error) {
      throw error;
    }
  }

  async getById(id) {
    try {
      const service = await Service.findById(id);
      if (!service) {
        console.log('no Service');
      }
      return service;
    } catch (error) {
      throw error;
    }
  }

  async getAll() {
    try {
      const data = {};
      data.payload = await Service.find();
      return data;
    } catch (error) {
      throw error;
    }
  }

  async delete(id) {
    try {
      const result = await Service.findByIdAndDelete(id);
      return `Service ${id} deleted`;
    } catch (error) {
      throw error;
    }
  }

  async update(id, data) {
    try {
      console.log(`Service ${id} updated`);
      return await Service.findByIdAndUpdate(id, data);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new ServiceDAL();
