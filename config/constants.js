require('dotenv').config();

exports.IMAGE_PATH_PREFIX = '/images/';
exports.THUMBS_PATH_PREFIX = '/thumbs/';
exports.COOKIE_MAX_AGE = process.env.TOKEN_COOKIE_MAX_AGE || 900000;
exports.PORT = process.env.PORT || 4000;
exports.MONGO_CONN_STRING = process.env.MONGO_CONN_STRING;
exports.AWS_KEY = process.env.AWS_KEY;
exports.AWS_SECRET = process.env.AWS_SECRET;
exports.AWS_BUCKET_NAME = process.env.AWS_BUCKET_NAME || 'michal-doron';
exports.AWS_REGION = process.env.AWS_REGION || 'eu-central-1';
