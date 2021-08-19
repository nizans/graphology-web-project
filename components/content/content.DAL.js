const Content = require('./content.model');

class ContentDAL {
  async add(data) {
    try {
      const content = new Content(data);
      return await content.save();
    } catch (error) {
      throw error;
    }
  }

  async getById(id) {
    try {
      return await Content.findById(id);
    } catch (error) {}
  }

  async getAll() {
    try {
      return await Content.find();
    } catch (error) {}
  }

  async delete(id) {
    try {
      const result = await Content.findByIdAndDelete(id);
      console.log(result);
      if (!result) throw new ErrorHandler({ statusCode: 404, message: 'Content not found' });
      return `Content ${id} deleted`;
    } catch (error) {
      throw error;
    }
  }

  async update(id, data) {
    try {
      return await Content.findByIdAndUpdate(id, data);
      console.log(`Content ${id} updated`);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new ContentDAL();
