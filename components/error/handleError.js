const errorController = require('./error.controller');
const ErrorHandle = require('./error.model');

const handleError = (err, res) => {
  if (!(err instanceof ErrorHandle)) err = errorController(err);
  const { statusCode, message, originalError } = err;
  if (originalError) console.log(originalError);
  res.status(statusCode).json({
    status: 'error',
    statusCode,
    message,
  });
};

module.exports = handleError;
