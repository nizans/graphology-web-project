const Service = require('../../base/Service');
const ArticleDAL = require('./article.DAL');
const { createArticleValidation, updateArticleValidation } = require('./article.validation');

class ArticleService extends Service {
  constructor() {
    super(ArticleDAL);
  }

  async create(data) {
    await createArticleValidation.validateAsync(data);
    return await super.create(data);
  }
  async update(id, data) {
    await updateArticleValidation.validateAsync(data);
    return await super.update(id, data);
  }
}
module.exports = new ArticleService();
