const express = require('express');
const router = express.Router();
const serviceController = require('./services.controller');
const uploadFile = require('../../middleware/uploadFile');

// /articles
router.post('/', uploadFile, serviceController.postService);
router.get('/', serviceController.getAllServices);
router.get('/:id', serviceController.getServiceById);
router.delete('/:id', serviceController.deleteService);
module.exports = router;
