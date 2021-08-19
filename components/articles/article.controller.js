const ArticleService = require('./article.service');

// POST /article
exports.postArticle = async (req, res, next) => {
  const body = req.body;
  if (req.file) body.filename = req.file.filename;
  try {
    res.status(201).send(await ArticleService.create(body));
  } catch (error) {
    next(error);
  }
};

//GET /article
// GET ALL ARITICLE
exports.getAllArticles = async (req, res, next) => {
  try {
    res.send(await ArticleService.getAll());
  } catch (error) {
    next(error);
  }
};

exports.deleteArticle = async (req, res, next) => {
  const id = req.params.id;
  try {
    res.status(204).send(await ArticleService.delete(id));
  } catch (error) {
    next(error);
  }
};
