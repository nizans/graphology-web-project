const express = require('express');
const router = express.Router();
const { PAGE_NOT_FOUND } = require('../components/error/error.constants');

router.use('/admins', require('../components/admin'));
router.use('/articles', require('../components/articles'));
router.use('/videos', require('../components/videos'));
router.use('/contents', require('../components/contents'));
router.use('/services', require('../components/services'));
router.use('/books', require('../components/books'));
router.use('/contact', require('../components/contact'));
router.use('/auth', require('../components/auth'));
router.use('/certifications', require('../components/certifications'));
router.use('/recommendations', require('../components/recommendations'));
router.use('*', (req, res, next) => {
  next(PAGE_NOT_FOUND);
});

module.exports = router;
