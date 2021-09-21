const adminService = require('./components/admin/admin.service');
const { PAGE_NOT_FOUND } = require('./components/error/error.constants');
const ErrorHandle = require('./components/error/error.model');
const refreshTokenDAL = require('./components/refreshTokens/refreshToken.DAL');
const { verifyRefreshToken, verifyAccessToken } = require('./utils/jwtHelpers');
const cookieParser = require('cookie-parser');
const { replaceAccessToken } = require('./middleware/replaceAccessToken');
const { protectRoute } = require('./middleware/protectRoute');
const { COOKIE_MAX_AGE } = require('./config/constants');

const express = require('express'),
  app = express(),
  cors = require('cors'),
  morgan = require('morgan'),
  handleError = require('./components/error/handleError');

// Middlewares
app.use(morgan('dev'));
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);
app.use(express.json());

// const router = express.Router();

// router.post('/login', async function (req, res, next) {
//   try {
//     const { refreshToken, accessToken, email, name } = await adminService.login(req.body);
//     res.cookie('accessToken', accessToken, {
//       maxAge: COOKIE_MAX_AGE,
//       httpOnly: true,
//       path: '/',
//       sameSite: 'none',
//       secure: true,
//     });
//     res.status(200).json({ refreshToken, email, name });
//   } catch (error) {
//     next(error);
//   }
// });

// router.delete('/logout', async function (req, res, next) {
//   try {
//     const admin = verifyAccessToken(req.cookies.accessToken);
//     await adminService.logout(admin);
//     res.clearCookie('accessToken');
//     res.status(200).json('Admin logged out');
//   } catch (error) {
//     next(error);
//   }
// });

// router.post(
//   '/refresh',
//   async (req, res, next) => {
//     try {
//       const refreshToken = req.body.refreshToken;
//       if (!refreshToken) throw new ErrorHandle(401, 'No refresh token');
//       const isRefreshTokenExists = await refreshTokenDAL.findRefreshToken(refreshToken);
//       if (!isRefreshTokenExists) throw new ErrorHandle(403, 'Refresh token does not exists in DB');
//       const { email, name } = verifyRefreshToken(refreshToken);
//       req.admin = { email, name };
//       next();
//     } catch (error) {
//       next(error);
//     }
//   },
//   replaceAccessToken,
//   (req, res, next) => {
//     res.status(200).json(req.admin);
//   }
// );

// router.put('/renew', protectRoute, replaceAccessToken, (req, res, next) => {
//   res.status(200).json('Renew success');
// });
const authRouter = require('./components/auth');
app.use('/auth', authRouter);

app.use('*', (req, res, next) => {
  next(PAGE_NOT_FOUND);
});
app.use((err, req, res, next) => {
  handleError(err, res);
});

module.exports = app;
