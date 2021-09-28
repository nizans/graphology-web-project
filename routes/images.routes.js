const express = require('express');
const router = express.Router();
const { getFileStream } = require('../lib/s3');
const ErrorHandle = require('../components/error/error.model');

router.get('/images/:name', (req, res, next) => {
  try {
    const name = req.params.name;
    if (!name) throw new ErrorHandle(404, 'No image name');
    const readStream = getFileStream('images/' + name);
    readStream.pipe(res);
  } catch (error) {
    next(error);
  }
});
router.get('/thumbs/:name', (req, res, next) => {
  try {
    const name = req.params.name;
    if (!name) throw new ErrorHandle(404, 'No thumb name');
    const readStream = getFileStream('thumbs/' + name);
    readStream.pipe(res);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
