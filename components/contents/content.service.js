const Service = require('../../base/Service');
const ContentDal = require('./content.DAL');

class ContentService extends Service {
  constructor() {
    super(ContentDal);
  }
}

module.exports = new ContentService();
