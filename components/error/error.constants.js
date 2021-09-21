const ErrorHandle = require('./error.model');

///////////////////////////////
/// Operational errors only ///
///////////////////////////////

const strings = {
  NO_SEARCH_RESULT: 'אין תוצאות לחיפוש',
  LOGIN_INVALID_EMAIL: 'אימייל לא נמצא',
  LOGIN_INCORRECT_PASS: 'סיסמא שגויה',
  PAGE_NOT_FOUND: 'העמוד המבוקש לא נמצא',
  CONTENT_NOT_EXISTS: 'לא קיים תוכן',
  INVALID_REQUEST: 'בקשה לא תקינה',
  EMAIL_ALREADY_EXISTS: 'קיים מנהל עם האימייל שהוכנס',
};

exports.PAGE_NOT_FOUND = new ErrorHandle(404, 'Page does not exists', null, strings.PAGE_NOT_FOUND);
exports.NO_RESULTS = new ErrorHandle(404, 'Content does not exists', null, strings.CONTENT_NOT_EXISTS);
exports.NO_SEARCH_RESULT = new ErrorHandle(404, 'Search did not found anything', null, strings.NO_SEARCH_RESULT);
exports.ITEM_NOT_EXISTS = new ErrorHandle(404, 'Item not found', 'לא נמצא התוכן המבוקש');

exports.LOGIN_INVALID_EMAIL = new ErrorHandle(401, 'Email does not exists', null, strings.LOGIN_INVALID_EMAIL);
exports.LOGIN_INCORRECT_PASS = new ErrorHandle(401, 'Incorrect password', null, strings.LOGIN_INCORRECT_PASS);

exports.EMAIL_ALREADY_EXISTS = new ErrorHandle(422, 'Email already exists', null, strings.EMAIL_ALREADY_EXISTS);

exports.INVALID_MONGO_ID = id =>
  new ErrorHandle(400, 'ID: "' + id + '" is not a valid mongo ObjecID', null, strings.INVALID_REQUEST);
