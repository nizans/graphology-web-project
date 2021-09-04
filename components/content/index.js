const express = require('express');
const router = express.Router();
const contentController = require('./content.controller');
const uploadFile = require('../../middleware/uploadFile');

// /articles
router.post('/', uploadFile, contentController.postContent);
router.get('/', contentController.getContentsPagination);
router.delete('/:id', contentController.deleteContent);
module.exports = router;
