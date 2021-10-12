const mongoErrorController = require('./mongo.error.controller');
const ErrorHandle = require('./error.model');
const mongoose = require('mongoose');

module.exports = err => {
  if (err.isJoi) return joiErrorController(err);
  if (err instanceof mongoose.Error || err.name === 'MongoError') {
    return mongoErrorController(err);
  }
  return new ErrorHandle(500, 'Unknown error occurred on the server.', err);
};

//TODO - implement joiErrorController
const joiErrorController = err => {
  let message = '';
  const details = Array.from(err.details);
  details.forEach(det => {
    message += det.message + ', ';
  });
  
  return new ErrorHandle(406, message);
};
