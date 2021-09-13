const ErrorHandle = require('../components/error/error.model');

const createMongoSearchQuery = searchString => {
  //   return { $text: { $search: searchString } };
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
    if (!result) throw new ErrorHandle(404, `${this.name} with ID: ${id} does not exists}`);
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
      if (res.length === 0) throw new ErrorHandle(404, 'Search did not found anything');
      const count = res[0]?.found_items;
      data.pages = Math.ceil(count / limit);
    } else {
      const count = await this.Model.countDocuments();
      data.pages = Math.ceil(count / limit);
      data.found_items = count;
    }

    if (data.page > data.pages) throw new ErrorHandle(404, 'The requested page does not exists');
    const items = await this.Model.find(find)
      .limit(limit)
      .skip(page * limit)
      .sort(sortby);
    data.payload = items;
    return data;
  }

  async delete(id) {
    const result = await this.Model.findByIdAndRemove(id).select('_id title');
    if (!result) throw new ErrorHandle(404, `${this.name} with ID: ${id} does not exists}`);
    return result;
  }

  async update(id, data) {
    const result = await this.Model.findByIdAndUpdate(id, data);
    if (!result) throw new ErrorHandle(404, `${this.name} with ID: ${id} does not exists}`);
    return result;
  }
}

module.exports = DAL;
