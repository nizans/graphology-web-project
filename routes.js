const express = require('express');
const router = express.Router();
const { PAGE_NOT_FOUND } = require('./components/error/error.constants');

router.use('/admins', require('./components/admin/index'));
router.use('/articles', require('./components/articles/index'));
router.use('/videos', require('./components/videos/index'));
router.use('/contents', require('./components/contents/index'));
router.use('/services', require('./components/services/index'));
router.use('/books', require('./components/books/index'));
router.use('/contact', require('./components/contact/index'));
router.use('*', (req, res, next) => {
  next(PAGE_NOT_FOUND);
});

module.exports = router;
