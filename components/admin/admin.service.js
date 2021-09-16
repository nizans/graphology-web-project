const Service = require('../../base/Service');
const { signJWT } = require('../../utils/jwtHelpers');
const AdminDAL = require('./admin.DAL');

class AdminService extends Service {
  constructor() {
    super(AdminDAL);
  }
  async login(data) {
    const { email, password } = data;

    const admin = await this.DAL.login(email, password);
    return { tokens: signJWT(admin.toJSON()), admin };
  }
}

module.exports = new AdminService();
