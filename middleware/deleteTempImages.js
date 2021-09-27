const deleteLocalImages = require('../utils/deleteLocalImages');

const deleteTempImages = (req, res, next) => {
  deleteLocalImages(req.body.images);
  next();
};

module.exports = deleteTempImages;
