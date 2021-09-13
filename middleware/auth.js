const ErrorHandle = require('../components/error/error.model');
const handleError = require('../components/error/handleError');
const { verifyToken } = require('../utils/jwtHelpers');

exports.authenticate = async (req, res, next) => {
  try {
    const bearerHeader = req.headers['authorization'];
    if (!bearerHeader) throw new ErrorHandle(403, 'Access denied');
    else {
      const bearer = bearerHeader.split(' ');
      const token = bearer[1];
      req.token = await verifyToken(token);
      console.log(token);
      next();
    }
  } catch (error) {
    handleError(error, res);
  }
};
