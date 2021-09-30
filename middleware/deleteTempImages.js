const deleteLocalImages = require('../utils/deleteLocalImages');

const deleteTempImages = (req, res, next) => {
  if (req.body.images) deleteLocalImages(req.body.images);
  if (req.body.image) deleteLocalImages([req.body.image]);
  next();
};

module.exports = deleteTempImages;
