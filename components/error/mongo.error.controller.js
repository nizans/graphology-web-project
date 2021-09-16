const mongoose = require('mongoose');
const ErrorHandle = require('./error.model');

const handleDuplicateKeyError = (err, res) => {
  const field = Object.keys(err.keyValue);
  const statusCode = 409;
  const error = `${field} already exists, must be unique`;
  return new ErrorHandle(statusCode, { messages: error, fields: field }, err);
};

const handleValidationError = err => {
  let errors = Object.values(err.errors).map(el => el.message);
  let fields = Object.values(err.errors).map(el => el.path);
  let statusCode = 400;
  if (errors.length > 1) {
    const formattedErrors = errors;
    return new ErrorHandle(statusCode, { messages: formattedErrors, fields: fields }, err);
  } else {
    return new ErrorHandle(statusCode, { messages: errors, fields: fields }, err);
  }
};

const handleCastError = err => {
  return new ErrorHandle(400, err.message, err);
};

module.exports = err => {
  if (err instanceof mongoose.Error.ValidationError) {
    return handleValidationError(err);
  }
  if (err.code && err.code == 11000) {
    return handleDuplicateKeyError(err);
  }
  if (err.name === 'CastError') {
    return handleCastError(err);
  }

  return new ErrorHandle(500, 'Unknown error occurred on the server.', err);
};
