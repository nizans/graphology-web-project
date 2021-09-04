const ContentDal = require('./content.DAL');
const CONTENTS_PER_PAGE = 10;
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

  async getPagination(page = 1) {
    return ContentDal.getPagination(page, CONTENTS_PER_PAGE);
  }

  async getById(id) {
    return ContentDal.getById(id);
  }
}

module.exports = new ContentService();
