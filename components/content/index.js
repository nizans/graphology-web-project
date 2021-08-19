const express = require('express');
const router = express.Router();
const contentController = require('./content.controller');
const uploadFile = require('../../middleware/uploadFile');

// /articles
router.post('/', uploadFile, contentController.postArticle);
router.get('/', contentController.getAllArticles);
router.delete('/:id', contentController.deleteArticle);
module.exports = router;
