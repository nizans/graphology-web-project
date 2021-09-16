const { NO_SEARCH_RESULT, PAGE_NOT_FOUND, ITEM_NOT_EXISTS } = require('../components/error/error.constants');
const ErrorHandle = require('../components/error/error.model');

const createMongoSearchQuery = searchString => {
  return {
    $or: [
      { title: { $regex: searchString, $options: 'i' } },
      { text: { $regex: searchString, $options: 'i' } },
      { description: { $regex: searchString, $options: 'i' } },
    ],
  };
};

class DAL {
  constructor(Model, name) {
    this.Model = Model;
    this.name = name;
  }

  async add(data) {
    return await new this.Model(data).save();
  }

  async getById(id) {
    const result = await this.Model.findById(id);
    if (!result) throw ITEM_NOT_EXISTS;
    return result;
  }

  async count(find) {
    return await this.Model.aggregate([{ $match: find }, { $count: 'found_items' }]);
  }

  async get(page, limit, sortby, find = {}) {
    const data = {
      page: page,
      sorted_by: sortby,
    };

    if (find) {
      find = createMongoSearchQuery(find);
      const res = await this.count(find);
      if (res.length === 0) throw NO_SEARCH_RESULT;
      const count = res[0]?.found_items;
      data.pages = Math.ceil(count / limit);
    } else {
      const count = await this.Model.countDocuments();
      data.pages = Math.ceil(count / limit);
      data.found_items = count;
    }

    if (data.page > data.pages) throw PAGE_NOT_FOUND;
    const items = await this.Model.find(find)
      .limit(limit)
      .skip(page * limit)
      .sort(sortby);
    data.payload = items;
    return data;
  }

  async delete(id) {
    const result = await this.Model.findByIdAndRemove(id).select('_id title');
    if (!result) throw ITEM_NOT_EXISTS;
    return result;
  }

  async update(id, data) {
    const result = await this.Model.findByIdAndUpdate(id, data);
    if (!result) throw ITEM_NOT_EXISTS;
    return result;
  }
}

module.exports = DAL;
