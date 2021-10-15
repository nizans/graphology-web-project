const ErrorHandle = require('./error.model');

//////////////////////////
/// Operational errors ///
//////////////////////////
//TODO - Add JOI errors
const strings = {
  NO_SEARCH_RESULT: 'אין תוצאות לחיפוש',
  EMAIL_NOT_EXISTS: 'אימייל לא נמצא',
  LOGIN_INCORRECT_PASS: 'סיסמא שגויה',
  PAGE_NOT_FOUND: 'העמוד המבוקש לא נמצא',
  CONTENT_NOT_EXISTS: 'לא קיים תוכן',
  INVALID_REQUEST: 'בקשה לא תקינה',
  EMAIL_ALREADY_EXISTS: 'קיים מנהל עם האימייל שהוכנס',
  CANNOT_DELETE_CURRECT_ADMIN: 'לא ניתן למחוק משתמש כאשר אתה מחובר דרכו',
  ITEM_NOT_EXISTS: 'לא נמצא התוכן המבוקש',
};

exports.INVALID_REQUEST = new ErrorHandle(404, 'Invalid Request', null, strings.INVALID_REQUEST, true);
exports.PAGE_NOT_FOUND = new ErrorHandle(404, 'Page does not exists', null, strings.PAGE_NOT_FOUND, true);
exports.NO_RESULTS = new ErrorHandle(404, 'Content does not exists', null, strings.CONTENT_NOT_EXISTS, true);
exports.NO_SEARCH_RESULT = new ErrorHandle(404, 'Search did not found anything', null, strings.NO_SEARCH_RESULT, true);
exports.ITEM_NOT_EXISTS = new ErrorHandle(404, 'Item not found', strings.ITEM_NOT_EXISTS, null, true);
exports.EMAIL_NOT_EXISTS = new ErrorHandle(401, 'Email does not exists', null, strings.EMAIL_NOT_EXISTS, true);
exports.LOGIN_INCORRECT_PASS = new ErrorHandle(401, 'Incorrect password', null, strings.LOGIN_INCORRECT_PASS, true);
exports.EMAIL_ALREADY_EXISTS = new ErrorHandle(422, 'Email already exists', null, strings.EMAIL_ALREADY_EXISTS, true);
exports.CANNOT_DELETE_CURRECT_ADMIN = new ErrorHandle(
  409,
  'Admin cannot delete himself while connected',
  null,
  strings.CANNOT_DELETE_CURRECT_ADMIN,
  true
);

exports.INVALID_MONGO_ID = id =>
  new ErrorHandle(400, 'ID: "' + id + '" is not a valid mongo ObjectID', null, strings.INVALID_REQUEST);
