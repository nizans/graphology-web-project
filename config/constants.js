

//SERVER
exports.PORT = process.env.PORT || 4000;
exports.HOSTNAME = process.env.HOSTNAME || 'http://localhost:4000';
exports.MONGO_CONN_STRING = process.env.MONGO_CONN_STRING;

//PREFIX
exports.IMAGE_PATH_PREFIX = '/images/';
exports.THUMBS_PATH_PREFIX = '/thumbs/';

//AWS
exports.AWS_KEY = process.env.AWS_KEY;
exports.AWS_SECRET = process.env.AWS_SECRET;
exports.AWS_BUCKET_NAME = process.env.AWS_BUCKET_NAME || 'michal-doron';
exports.AWS_REGION = process.env.AWS_REGION || 'eu-central-1';

//AUTH
exports.COOKIE_MAX_AGE = process.env.TOKEN_COOKIE_MAX_AGE || 900000;
exports.JWT_ACCESS_KEY = process.env.JWT_ACCESS_KEY || 'secret';
exports.JWT_REFRESH_KEY = process.env.JWT_REFRESH_KEY || 'secret';
exports.JWT_RESET_PASSWORD_KEY = process.env.JWT_RESET_PASSWORD_KEY || this.JWT_ACCESS_KEY + this.JWT_REFRESH_KEY;
exports.ACCESS_TOKEN_EXPIRATION = process.env.ACCESS_TOKEN_EXPIRATION || '15m';
exports.REFRESH_TOKEN_EXPIRATION = process.env.REFRESH_TOKEN_EXPIRATION || '3d';
exports.RESET_PASSWORD_EXPIRATION = process.env.RESET_PASSWORD_EXPIRATION || '1day';

//SENDGRID
exports.SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
exports.FROM_EMAIL_ADDRESS = process.env.FROM_EMAIL_ADDRESS;
