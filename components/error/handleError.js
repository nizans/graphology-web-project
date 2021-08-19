const errorController = require('./error.controller');

const handleError = (err, res) => {
  const { statusCode, message } = errorController(err);
  console.error({ status: 'error', statusCode, message });
  res.status(statusCode).json({
    status: 'error',
    statusCode,
    message,
  });
};

module.exports = handleError;
