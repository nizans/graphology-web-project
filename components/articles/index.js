const express = require('express');
const router = express.Router();
const articleController = require('./article.controller');
const uploadFile = require('../../middleware/uploadFile');

// /articles
router.post('/', uploadFile, articleController.postArticle);
router.post('/image_upload', uploadFile, (req, res, next) => {
  res.status(200).send({ location: req.file.path });
});
router.get('/', articleController.getAllArticles);
router.delete('/:id', articleController.deleteArticle);
module.exports = router;
