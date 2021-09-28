const { COOKIE_MAX_AGE } = require('../config/constants');
const { getAccessAndRefreshToken } = require('../utils/jwtHelpers');

exports.replaceAccessToken = (req, res, next) => {
  const { email, name, _id } = req.admin;
  const newAccessToken = getAccessAndRefreshToken({ email, name, _id }, false);
  res.cookie('accessToken', newAccessToken, { maxAge: COOKIE_MAX_AGE, httpOnly: true });
  next();
};
