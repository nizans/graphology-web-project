const express = require('express');
const router = express.Router();
const videoController = require('./video.controller');

router.post('/', videoController.postVideo);
router.get('/', videoController.getVideosPagination);

module.exports = router;
