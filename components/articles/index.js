const ComponentRouter = require('../../base/ComponentRouter');
const ArticleController = require('./article.controller');

class ArticleRouter extends ComponentRouter {
  constructor() {
    super(ArticleController);
  }
}

module.exports = new ArticleRouter().router;
