const errorController = require('./error.controller');

const handleError = (err, res) => {
  const { statusCode, message, originalError } = errorController(err);
  if (originalError) console.log(originalError);
  res.status(statusCode).json({
    status: 'error',
    statusCode,
    message,
  });
};

module.exports = handleError;
