const express = require('express');
const router = express.Router();
const articleController = require('./article.controller');
const uploadFile = require('../../middleware/uploadFile');

// /articles
router.get('/', articleController.getArticlesPagination);
router.post('/', uploadFile, articleController.postArticle);
router.delete('/:id', articleController.deleteArticle);
module.exports = router;
