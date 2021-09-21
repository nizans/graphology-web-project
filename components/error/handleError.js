const errorController = require('./error.controller');
const ErrorHandle = require('./error.model');

const handleError = (err, res) => {
  if (!(err instanceof ErrorHandle)) err = errorController(err);
  const { statusCode, message, originalError, clientMessage } = err;

  console.error(originalError || err);
  const responsePayload = clientMessage || message;
  res.headers = res.status(statusCode).json({ message: responsePayload });
};

module.exports = handleError;
