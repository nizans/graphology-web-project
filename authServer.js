const adminService = require('./components/admin/admin.service');
const { PAGE_NOT_FOUND } = require('./components/error/error.constants');
const ErrorHandle = require('./components/error/error.model');
const { authenticate } = require('./middleware/auth');
const { verifyToken } = require('./utils/jwtHelpers');

const express = require('express'),
  app = express(),
  cors = require('cors'),
  morgan = require('morgan'),
  handleError = require('./components/error/handleError');

// Middlewares
app.use(morgan('-------------authServer------------------\n[:date[web]]'));
app.use(morgan('dev'));
app.use(morgan('-----------------------------------------'));
app.use(cors());
app.use(express.json());

const router = express.Router();

router.post('/login', async function (req, res, next) {
  try {
    const result = await adminService.login(req.body);

    res.send(result);
  } catch (error) {
    next(error);
  }
});

router.options('/authenticate', authenticate);

router.use('*', (req, res, next) => {
  next(PAGE_NOT_FOUND);
});
app.use('/auth', router);

// app.post('/refresh', (req, res, next) => {
//   const refreshToken = req.body.token;
//   if (!refreshToken) throw new ErrorHandle(401, 'No refresh token');

//   //Replace with redis
//   if (!rt.includes(refreshToken)) throw new ErrorHandle(403, 'Refresh token invalid');
//   verifyToken(refreshToken);
// });

app.use((err, req, res, next) => {
  handleError(err, res);
});

module.exports = app;
