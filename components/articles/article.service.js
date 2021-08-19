const ArticleDAL = require('./article.DAL');

class ArticleService {
  async create(data) {
    return ArticleDAL.add(data);
  }

  async delete(id) {
    return ArticleDAL.delete(id);
  }

  async update(id) {
    return ArticleDAL.update(id);
  }

  async getAll() {
    return ArticleDAL.getAll();
  }

  async getById(id) {
    return ArticleDAL.getById(id);
  }
}

module.exports = new ArticleService();
