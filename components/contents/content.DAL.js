const Content = require('./content.model');
const DAL = require('../../base/DAL');

class ContentDAL extends DAL {
  constructor() {
    super(Content, 'Content');
  }
}

module.exports = new ContentDAL();
