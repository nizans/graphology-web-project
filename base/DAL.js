const ErrorHandle = require('../components/error/error.model');

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

  async get(page, limit, sortby, find) {
    const count = await this.Model.countDocuments();
    const data = {
      pages: Math.ceil(count / limit),
      page: page,
      total_items: count,
      sorted_by: sortby,
    };
    if (data.page > data.pages) throw new ErrorHandle(404, 'The requested page does not exists');
    const items = await this.Model.find(find)
      .limit(limit)
      .skip(page * limit)
      .sort(sortby);
    data.payload = items;
    return data;
  }

  async delete(id) {
    const result = await this.Model.findByIdAndDelete(id).select('_id title');
    if (!result) throw new ErrorHandle(404, `${this.name} with ID: ${id} does not exists}`);
    return JSON.stringify(result);
  }

  async update(id, data) {
    const result = await this.Model.findByIdAndUpdate(id, data);
    if (!result) throw new ErrorHandle(404, `${this.name} with ID: ${id} does not exists}`);
    return result;
  }
}

module.exports = DAL;
