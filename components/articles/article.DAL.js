const ErrorHandle = require('../error/error.model');
const Article = require('./article.model');

class ArticleDAL {
  async add(data) {
    try {
      const article = new Article({
        title: data.title,
        source: { from: data.sourceFrom, url: data.sourceURL },
        image: data.filename || data.image,
        text: data.text,
        publishDate: data.publishDate,
      });
      const newArticle = await article.save();
      return newArticle;
    } catch (error) {
      throw error;
    }
  }

  async getById(id) {
    try {
      const article = await Article.findById(id);
    } catch (error) {
      throw error;
    }
  }

  async getAll() {
    try {
      const allArticles = await Article.find();
      return allArticles;
    } catch (error) {
      throw error;
    }
  }

  async getPagination(page, limit) {
    try {
      const count = await Article.count();
      const data = {
        pages: Math.ceil(count / limit),
        page: page,
      };
      if (data.page >= data.pages) throw new ErrorHandle(404, 'The requested page does not exists');
      const articles = await Article.find()
        .limit(limit)
        .skip(page * limit)
        .sort('-uploadDate');
      data.payload = articles;
      return data;
    } catch (error) {
      throw error;
    }
  }

  async delete(id) {
    try {
      const result = await Article.findByIdAndDelete(id);

      if (!result) throw new ErrorHandle(404, 'Article not found');
      return `Article ${id} deleted`;
    } catch (error) {
      throw error;
    }
  }

  async update(id, data) {
    try {
      const updatedArticle = await Article.findByIdAndUpdate(id, data);
      console.log(`article ${id} updated`);
      return updatedArticle;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new ArticleDAL();
