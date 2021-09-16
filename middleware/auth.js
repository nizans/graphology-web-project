const ErrorHandle = require('../components/error/error.model');
const handleError = require('../components/error/handleError');
const { verifyToken } = require('../utils/jwtHelpers');

exports.authenticate = async (req, res, next) => {
  try {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) throw new ErrorHandle(401, 'No token');
    req.token = await verifyToken(token);
    next();
  } catch (error) {
    handleError(error, res);
  }
};
