const Content = require('./content.model');
const ErrorHandle = require('../error/error.model');
const DAL = require('../../base/DAL');

class ContentDAL extends DAL {
  constructor() {
    super(Content, 'Content');
  }
}

module.exports = new ContentDAL();
