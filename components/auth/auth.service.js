const { verifyRefreshToken, verifyAccessToken } = require('../../utils/jwtHelpers');
const adminService = require('../admin/admin.service');
const refreshTokenDAL = require('../refreshTokens/refreshToken.DAL');

class AuthService {
  constructor() {
    this.adminService = adminService;
  }

  async login(data) {
    const { refreshToken, accessToken, email, name } = await adminService.login(data);
    return { response: { refreshToken, email, name }, authCookie: accessToken };
  }

  async logout(accessToken) {
    const admin = verifyAccessToken(accessToken);
    await adminService.logout(admin);
  }

  async refresh(refreshToken) {
    const isRefreshTokenExists = await refreshTokenDAL.findRefreshToken(refreshToken);
    if (!isRefreshTokenExists) throw new ErrorHandle(403, 'Refresh token does not exists in DB');
    const { email, name } = verifyRefreshToken(refreshToken);
    return { email, name };
  }
}

module.exports = new AuthService();
