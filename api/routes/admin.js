const express = require('express');
const adminController = require('../controllers/admin');
const router = express.Router();

// Content
router.post('/content', adminController.postAddContent);
router.delete('/content/:id', adminController.deleteContent);
router.patch('/content/:id', adminController.patchUpdateContent);

// Book
router.post('/book', adminController.postAddBook);
router.delete('/book/:id', adminController.deleteBook);
router.patch('/book/:id', adminController.patchUpdateBook);

module.exports = router;
