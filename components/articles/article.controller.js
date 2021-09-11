const Controller = require('../../base/Controller');
const ArticleService = require('./article.service');

class ArticleController extends Controller {
  constructor() {
    super(ArticleService);
  }
}

module.exports = new ArticleController();
