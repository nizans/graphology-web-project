const Article = require('./article.model');

class ArticleDAL {
  async add(data) {
    try {
      const article = new Article({
        title: data.title,
        source: { from: data.sourceFrom, url: data.sourceURL },
        image: data.filename,
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
      console.log(article);
    } catch (error) {
      throw error;
    }
  }
  async getAll() {
    try {
      const all = await Article.find();
      return all;
    } catch (error) {
      throw error;
    }
  }

  async delete(id) {
    try {
      const result = await Article.findByIdAndDelete(id);
      console.log(result);
      if (!result) throw new ErrorHandler({ statusCode: 404, message: 'article not found' });
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
