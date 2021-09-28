const jwt = require('jsonwebtoken');
const {
  JWT_ACCESS_KEY,
  JWT_REFRESH_KEY,
  ACCESS_TOKEN_EXPIRATION,
  REFRESH_TOKEN_EXPIRATION,
} = require('../config/constants');

exports.createToken = (payload, key, expiration) => {
  return jwt.sign(payload, key, { expiresIn: expiration });
};

exports.verifyToken = (token, key) => jwt.verify(token, key);

exports.getAccessAndRefreshToken = (payload, withRefresh = true) => {
  const accessToken = this.createToken(payload, JWT_ACCESS_KEY, ACCESS_TOKEN_EXPIRATION);
  if (withRefresh) {
    const refreshToken = this.createToken(payload, JWT_REFRESH_KEY, REFRESH_TOKEN_EXPIRATION);
    return { accessToken, refreshToken };
  }
  return accessToken;
};

exports.verifyRefreshToken = token => this.verifyToken(token, JWT_REFRESH_KEY);
exports.verifyAccessToken = token => this.verifyToken(token, JWT_ACCESS_KEY);
