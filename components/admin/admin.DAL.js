const ErrorHandle = require('../error/error.model');
const Admin = require('./admin.model');

class AdminDal {
  async add(data) {
    try {
      const admin = new Admin({
        title: data.title,
        source: { from: data.sourceFrom, url: data.sourceURL },
        image: data.filename || data.image,
        text: data.text,
        publishDate: data.publishDate,
      });
      const newArticle = await admin.save();
      return newArticle;
    } catch (error) {
      throw error;
    }
  }

  async getById(id) {
    try {
      const admin = await Admin.findById(id);
    } catch (error) {
      throw error;
    }
  }

  async getAll() {
    try {
      const allArticles = await Admin.find();
      return allArticles;
    } catch (error) {
      throw error;
    }
  }

  async delete(id) {
    try {
      const result = await Admin.findByIdAndDelete(id);

      if (!result) throw new ErrorHandle(404, 'Admin not found');
      return `Admin ${id} deleted`;
    } catch (error) {
      throw error;
    }
  }

  async update(id, data) {
    try {
      const updatedArticle = await Admin.findByIdAndUpdate(id, data);
      console.log(`admin ${id} updated`);
      return updatedArticle;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new AdminDal();
