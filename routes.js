const express = require('express');
const router = express.Router();

const articles = require('./components/articles/index');
router.use('/api/articles', articles);
const videos = require('./components/videos/index');
router.use('/api/videos', videos);
const contents = require('./components/content/index');
router.use('/api/contents', contents);
const services = require('./components/services/index');
router.use('/api/services', services);

module.exports = router;
