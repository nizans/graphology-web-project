const jwt = require('jsonwebtoken');
const ErrorHandle = require('../components/error/error.model');
require('dotenv').config();

const accessKey = process.env.JWT_ACCESS_KEY;
const refreshKey = process.env.JWT_REFRESH_KEY;

const TOKEN_EXPIRATION = '15m';
const REFRESH_TOKEN_EXPIRATION = '3d';

exports.signJWT = (payload, withRefresh = true) => {
  const accessToken = jwt.sign(payload, accessKey, { expiresIn: TOKEN_EXPIRATION });
  if (withRefresh) {
    const refreshToken = jwt.sign(payload, refreshKey, { expiresIn: REFRESH_TOKEN_EXPIRATION });
    return { accessToken, refreshToken };
  }
  return accessToken;
};

exports.verifyRefreshToken = token => jwt.verify(token, refreshKey);
exports.verifyAccessToken = token => jwt.verify(token, accessKey);
