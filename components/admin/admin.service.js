const Service = require('../../base/Service');
const { signJWT } = require('../../utils/jwtHelpers');
const refreshTokenDAL = require('../refreshTokens/refreshToken.DAL');
const AdminDAL = require('./admin.DAL');

class AdminService extends Service {
  constructor() {
    super(AdminDAL);
  }

  async login(data) {
    const { email, password } = data;
    const admin = await this.DAL.login(email, password);
    const tokens = signJWT(admin.toJSON());
    await refreshTokenDAL.setRefreshToken(email, tokens.refreshToken);
    return {
      refreshToken: tokens.refreshToken,
      accessToken: tokens.accessToken,
      email: admin.email,
      name: admin.name,
      adminId: admin._id,
    };
  }

  async logout(data) {
    const { email } = data;
    const result = await refreshTokenDAL.removeAllEmailTokens(email);
    return result;
  }
}

module.exports = new AdminService();
