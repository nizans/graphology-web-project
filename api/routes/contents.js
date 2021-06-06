const express = require('express');
const contentController = require('../controllers/content');
const router = express.Router();

router.get('/', contentController.getContents);
router.get('/:id', contentController.getContent);

module.exports = router;
