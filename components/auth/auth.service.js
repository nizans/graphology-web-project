const { verifyRefreshToken, verifyAccessToken } = require('../../utils/jwtHelpers');
const adminService = require('../admin/admin.service');
const ErrorHandle = require('../error/error.model');
const refreshTokenDAL = require('../refreshTokens/refreshToken.DAL');

class AuthService {
  constructor() {
    this.adminService = adminService;
  }

  async login(data) {
    const { refreshToken, accessToken, email, name, _id } = await adminService.login(data);
    return { response: { refreshToken, email, name, _id }, authCookie: accessToken };
  }

  async logout(accessToken) {
    const admin = verifyAccessToken(accessToken);
    await adminService.logout(admin);
  }

  async refresh(refreshToken) {
    const isRefreshTokenExists = await refreshTokenDAL.findRefreshToken(refreshToken);
    if (!isRefreshTokenExists) throw new ErrorHandle(403, 'Refresh token does not exists in DB');
    const { email, name, _id } = verifyRefreshToken(refreshToken);
    return { email, name, _id };
  }
}

module.exports = new AuthService();
