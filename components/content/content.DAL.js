const Content = require('./content.model');
const ErrorHandle = require('../error/error.model');

class ContentDAL {
  async add(data) {
    try {
      const content = new Content(data);
      return await content.save();
    } catch (error) {
      throw error;
    }
  }

  async getPagination(page, limit) {
    try {
      const count = await Content.countDocuments();
      const data = {
        pages: Math.ceil(count / limit),
        page: page,
      };
      if (data.page >= data.pages) throw new ErrorHandle(404, 'The requested page does not exists');
      const contents = await Content.find()
        .limit(limit)
        .skip(page * limit)
        .sort('-uploadDate');
      data.payload = contents;
      return data;
    } catch (error) {
      throw error;
    }
  }

  async getById(id) {
    try {
      const content = await Content.findById(id);
      if (!content) {
        console.log('no content');
      }
      return content;
    } catch (error) {
      throw error;
    }
  }

  async getAll() {
    try {
      return await Content.find();
    } catch (error) {
      throw error;
    }
  }

  async delete(id) {
    try {
      const result = await Content.findByIdAndDelete(id);

      return `Content ${id} deleted`;
    } catch (error) {
      throw error;
    }
  }

  async update(id, data) {
    try {
      console.log(`Content ${id} updated`);
      return await Content.findByIdAndUpdate(id, data);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new ContentDAL();
