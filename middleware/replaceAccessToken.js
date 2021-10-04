const authCookieSettings = require('../config/authCookieSettings');

const { getAccessAndRefreshToken } = require('../utils/jwtHelpers');

exports.replaceAccessToken = (req, res, next) => {
  const { email, name, _id } = req.admin;
  const newAccessToken = getAccessAndRefreshToken({ email, name, _id }, false);
  res.cookie('accessToken', newAccessToken, authCookieSettings);
  next();
};
