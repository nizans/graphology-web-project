const { create } = require('../articles/article.model');
const AdminDal = require('./admin.DAL');

class AdminService {
  async create(data) {
    return await AdminDal.add(data);
  }

  async delete(id) {
    return await AdminDAL.delete(id);
  }

  async update(id) {
    return await AdminDAL.update(id);
  }

  async getAll() {
    return await AdminDAL.getAll();
  }

  async getById(id) {
    return await AdminDAL.getById(id);
  }
}

module.exports = new AdminService();
