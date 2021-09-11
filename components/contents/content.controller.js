const Controller = require('../../base/Controller');
const ContentService = require('./content.service');

class ContentController extends Controller {
  constructor() {
    super(ContentService);
  }
}
module.exports = new ContentController();
