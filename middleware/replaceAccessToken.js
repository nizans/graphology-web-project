const { COOKIE_MAX_AGE } = require('../config/constants');
const { signJWT } = require('../utils/jwtHelpers');

exports.replaceAccessToken = (req, res, next) => {
  const { email, name } = req.admin;
  const newAccessToken = signJWT({ email, name }, false);
  res.cookie('accessToken', newAccessToken, { maxAge: COOKIE_MAX_AGE, httpOnly: true });
  next();
};
