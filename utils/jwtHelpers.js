const jwt = require('jsonwebtoken');
const ErrorHandle = require('../components/error/error.model');

const secret = 's';
exports.signJWT = payload =>
  new Promise((resolve, reject) => {
    jwt.sign(payload, secret, { expiresIn: '30s' }, (err, token) => {
      if (err) reject(new ErrorHandle(404, 'Error while signing new token', err));
      resolve(token);
    });
  });

exports.verifyToken = token =>
  new Promise((resolve, reject) => {
    jwt.verify(token, secret, (err, decoded) => {
      if (err) reject(new ErrorHandle(404, 'Invalid auth token', err));
      resolve(decoded);
    });
  });
