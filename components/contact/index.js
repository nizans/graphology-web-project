const express = require('express');
const contactController = require('./contact.controller');
const router = express.Router();

router.post('/', contactController.contact);
router.post('/order-book', contactController.orderBook);

module.exports = router;
