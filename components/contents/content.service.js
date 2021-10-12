const Service = require('../../base/Service');
const ContentDal = require('./content.DAL');
const { createContentValidation, updateContentValidation } = require('./content.validation');

class ContentService extends Service {
  constructor() {
    super(ContentDal);
  }

  async create(data) {
    await createContentValidation.validateAsync(data);
    return await super.create(data);
  }

  async update(id, data) {
    await updateContentValidation.validateAsync(data);
    return await super.update(id, data);
  }
}

module.exports = new ContentService();
