const authCookieSettings = require('../../config/authCookieSettings');
const { protectRoute } = require('../../middleware/protectRoute');
const { replaceAccessToken } = require('../../middleware/replaceAccessToken');
const ErrorHandle = require('../error/error.model');
const handleError = require('../error/handleError');
const authService = require('./auth.service');

class AuthController {
  constructor() {
    this.refresh = [
      this.#refresh,
      replaceAccessToken,
      (req, res, next) => {
        res.status(200).json(req.admin);
      },
    ];

    this.renew = [
      protectRoute,
      replaceAccessToken,
      (req, res, next) => {
        res.status(200).json('Renew success');
      },
    ];
  }

  async login(req, res, next) {
    try {
      const { response, authCookie } = await authService.login(req.body);
      res.cookie('accessToken', authCookie, authCookieSettings);
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }

  async logout(req, res, next) {
    try {
      const accessToken = req.cookies.accessToken;
      if (!accessToken) throw new ErrorHandle(403, 'No accsess token found in cookies');
      await authService.logout(accessToken);
      res.clearCookie('accessToken');
      res.status(200).json('Admin logged out');
    } catch (error) {
      next(error);
    }
  }

  async #refresh(req, res, next) {
    try {
      const refreshToken = req.body.refreshToken;
      if (!refreshToken) throw new ErrorHandle(401, 'No refresh token');
      req.admin = await authService.refresh(refreshToken);
      next();
    } catch (error) {
      handleError(error, res);
    }
  }
}

module.exports = new AuthController();
