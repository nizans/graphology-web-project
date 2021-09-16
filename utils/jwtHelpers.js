const jwt = require('jsonwebtoken');
const ErrorHandle = require('../components/error/error.model');
require('dotenv').config();

const accessKey = process.env.JWT_ACCESS_KEY;
const refreshKey = process.env.JWT_REFRESH_KEY;

exports.signJWT = payload => {
  const accessToken = jwt.sign(payload, accessKey, { expiresIn: '15m' });
  const refreshToken = jwt.sign(payload, refreshKey);
  return { accessToken, refreshToken };
};

exports.verifyToken = token =>
  new Promise((resolve, reject) => {
    jwt.verify(token, accessKey, (err, decoded) => {
      if (err) reject(new ErrorHandle(403, 'Invalid auth token', err));
      resolve(decoded);
    });
  });
