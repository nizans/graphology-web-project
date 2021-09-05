const errorController = require('./error.controller');

const handleError = (err, res) => {
  const { statusCode, message, originalError } = errorController(err);
  console.log(originalError);
  console.error({ status: 'error', statusCode, message });
  res.status(statusCode).json({
    status: 'error',
    statusCode,
    message,
  });
};

module.exports = handleError;
