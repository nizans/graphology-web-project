const ArticleDAL = require('./article.DAL');

const ARTICLES_PER_PAGE = 10;

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

  async getPagination(page = 0) {
    return ArticleDAL.getPagination(page, ARTICLES_PER_PAGE);
  }

  async getById(id) {
    return ArticleDAL.getById(id);
  }
}

module.exports = new ArticleService();
