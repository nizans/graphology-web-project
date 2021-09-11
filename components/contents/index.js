const ComponentRouter = require('../../base/ComponentRouter');
const ContentController = require('./content.controller');

class ContentRouter extends ComponentRouter {
  constructor() {
    super(ContentController);
  }
}

module.exports = new ContentRouter().router;
