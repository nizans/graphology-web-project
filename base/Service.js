const { isValidObjectId } = require('mongoose');
const { NO_RESULTS, INVALID_MONGO_ID } = require('../components/error/error.constants');
const { deleteObjects } = require('../lib/s3');
const isPositiveInteger = require('../utils/helpers');
const imagesToS3ObjectsArray = require('../utils/imagesToS3ObjectsArray');

class Service {
  constructor(DAL) {
    this.DAL = DAL;
    this.defaultSort = '-uploadDate';
    this.defaultLimit = 10;
  }

  async create(data) {
    return await this.DAL.add(data);
  }

  async delete(id) {
    if (!isValidObjectId(id)) throw INVALID_MONGO_ID(id);
    const result = await this.DAL.delete(id);
    if (result.images && result.images.length > 0) deleteObjects(imagesToS3ObjectsArray(result.images));
    return result;
  }

  async update(id, data) {
    console.log(data);
    if (!isValidObjectId(id)) throw INVALID_MONGO_ID(id);
    const oldDocument = await this.DAL.update(id, data);

    return oldDocument;
  }

  async get(queryParams) {
    const params = {
      page: isPositiveInteger(queryParams.page) ? Number(queryParams.page) : 0,
      limit: isPositiveInteger(queryParams.limit) ? Number(queryParams.limit) : this.defaultLimit,
      sortby: queryParams.sortby ? queryParams.sortby : this.defaultSort,
      find: queryParams.find ? queryParams.find : null,
    };
    const result = await this.DAL.get(params.page, params.limit, params.sortby, params.find);
    if (result.payload.length === 0) throw NO_RESULTS;
    return result;
  }

  async getById(id) {
    if (!isValidObjectId(id)) throw INVALID_MONGO_ID(id);
    const result = await this.DAL.getById(id);
    return result;
  }
}

module.exports = Service;
