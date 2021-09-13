const { isValidObjectId } = require('mongoose');
const ErrorHandle = require('../components/error/error.model');
const isPositiveInteger = require('../utils/helpers');

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
    if (!isValidObjectId(id)) throw new ErrorHandle(404, `${id} is not a valid ID`);
    return await this.DAL.delete(id);
  }

  async update(id) {
    if (!isValidObjectId(id)) throw new ErrorHandle(404, `${id} is not a valid ID`);
    return await this.DAL.update(id);
  }

  async get(queryParams) {
    const params = {
      page: isPositiveInteger(queryParams.page) ? Number(queryParams.page) : 0,
      limit: isPositiveInteger(queryParams.limit) ? Number(queryParams.limit) : this.defaultLimit,
      sortby: queryParams.sortby ? queryParams.sortby : this.defaultSort,
      find: queryParams.find ? queryParams.find : null,
    };
    return await this.DAL.get(params.page, params.limit, params.sortby, params.find);
  }

  async getById(id) {
    if (!isValidObjectId(id)) throw new ErrorHandle(404, `${id} is not a valid ID`);
    return await this.DAL.getById(id);
  }
}

module.exports = Service;
