const refreshTokenModel = require('../refreshTokens/refreshToken.model');

class RefreshTokenDAL {
  async findRefreshToken(token) {
    try {
      return await refreshTokenModel.exists({ refresh_token: token });
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async setRefreshToken(adminEmail, token) {
    try {
      refreshTokenModel({ admin_email: adminEmail, refresh_token: token }).save();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async removeAllEmailTokens(admin_email) {
    try {
      const result = await refreshTokenModel.deleteMany({ admin_email: admin_email });
      return;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async removeRefreshToken(token) {
    try {
      const result = await refreshTokenModel.findOneAndDelete({ refresh_token: token });
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

module.exports = new RefreshTokenDAL();
