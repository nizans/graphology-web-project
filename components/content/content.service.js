const ContentDal = require('./content.DAL');

class ContentService {
  async create(data) {
    return ContentDal.add(data);
  }

  async delete(id) {
    return ContentDal.delete(id);
  }

  async update(id) {
    return ContentDal.update(id);
  }

  async getAll() {
    return ContentDal.getAll();
  }

  async getById(id) {
    return ContentDal.getById(id);
  }
}

module.exports = new ContentService();
