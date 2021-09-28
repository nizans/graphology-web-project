const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const corsConfig = require('../config/cors.config');

const setDefualtMiddlewares = app => {
  app.use(morgan('dev'));
  app.use(cookieParser());
  app.use(cors(corsConfig));
};

module.exports = setDefualtMiddlewares;
