const { COOKIE_MAX_AGE } = require('./constants');

const options = {
  maxAge: COOKIE_MAX_AGE,
  httpOnly: true,
  path: '/',
  sameSite: 'none',
  secure: true,
};

module.exports = Object.freeze(options);
