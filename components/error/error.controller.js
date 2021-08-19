const mongoErrorController = require('./mongo.error.controller');
const ErrorHandle = require('./error.model');
const mongoose = require('mongoose');

module.exports = err => {
  if (err instanceof mongoose.Error || err.name === 'MongoError') return mongoErrorController(err);
  else return new ErrorHandle(500, 'Unknown error occurred on the server.', err);
};
