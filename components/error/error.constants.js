const ErrorHandle = require('./error.model');

const strings = {
  NO_SEARCH_RESULT: 'אין תוצאות לחיפוש',
  LOGIN_INVALID_EMAIL: 'אימייל לא נמצא',
  LOGIN_INCORRECT_PASS: 'סיסמא שגויה',
  PAGE_NOT_FOUND: 'העמוד המבוקש לא נמצא',
};

exports.PAGE_NOT_FOUND = new ErrorHandle(404, 'Page does not exists', null, strings.PAGE_NOT_FOUND);

exports.NO_SEARCH_RESULT = new ErrorHandle(404, 'Search did not found anything', null, strings.NO_SEARCH_RESULT);

exports.LOGIN_INVALID_EMAIL = new ErrorHandle(401, 'Email does not exists', null, strings.LOGIN_INVALID_EMAIL);

exports.LOGIN_INCORRECT_PASS = new ErrorHandle(401, 'Incorrect password', null, strings.LOGIN_INCORRECT_PASS);
