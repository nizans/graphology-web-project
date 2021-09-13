const express = require('express');
const router = express.Router();

const admin = require('./components/admin/index');
router.use('/admin', admin);

const articles = require('./components/articles/index');
router.use('/articles', articles);

const videos = require('./components/videos/index');
router.use('/videos', videos);

const contents = require('./components/contents/index');
router.use('/contents', contents);

const services = require('./components/services/index');
router.use('/services', services);

const books = require('./components/books/index');
router.use('/books', books);

module.exports = router;
