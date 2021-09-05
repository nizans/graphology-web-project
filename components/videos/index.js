const express = require('express');
const router = express.Router();
const videoController = require('./video.controller');

router.post('/', videoController.postVideo);
router.get('/latest', videoController.getLatestVideos);
router.get('/', videoController.getVideosPagination);
router.delete('/:id', videoController.deleteVideo);
module.exports = router;
