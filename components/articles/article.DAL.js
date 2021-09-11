const DAL = require('../../base/DAL');
const Article = require('./article.model');

class ArticleDAL extends DAL {
  constructor() {
    super(Article, 'Article');
  }
}

module.exports = new ArticleDAL();
