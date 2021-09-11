const Service = require('../../base/Service');
const ArticleDAL = require('./article.DAL');

class ArticleService extends Service {
  constructor() {
    super(ArticleDAL);
  }
}
module.exports = new ArticleService();
