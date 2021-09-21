const ErrorHandle = require('../components/error/error.model');
const handleError = require('../components/error/handleError');
const { verifyAccessToken } = require('../utils/jwtHelpers');

exports.protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.accessToken;
    if (!token) throw new ErrorHandle(403, 'No token');
    req.admin = verifyAccessToken(token);
    next();
  } catch (error) {
    handleError(error, res);
  }
};
