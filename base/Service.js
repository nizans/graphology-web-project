const { isValidObjectId } = require('mongoose');
const { NO_RESULTS, INVALID_MONGO_ID } = require('../components/error/error.constants');
const ErrorHandle = require('../components/error/error.model');
const deleteImages = require('../utils/deleteImages');
const isPositiveInteger = require('../utils/helpers');

const IMAGE_PREFIX = {
  full: '/images/',
  thumb: '/thumbs/',
};

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
    if (result.images) deleteImages(result.images);
    return result;
  }

  async update(id) {
    if (!isValidObjectId(id)) throw INVALID_MONGO_ID(id);
    return await this.DAL.update(id);
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
