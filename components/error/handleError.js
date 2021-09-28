const errorController = require('./error.controller');
const ErrorHandle = require('./error.model');

const handleError = (err, res) => {
  if (!(err instanceof ErrorHandle)) err = errorController(err);
  const { statusCode, message, originalError, clientMessage, isOperational } = err;
  if (!isOperational) {
    console.error(originalError || err);
  }

  res.status(statusCode).json({ message: clientMessage || message });
};

module.exports = handleError;
