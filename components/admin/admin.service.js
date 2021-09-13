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
    return { token: await signJWT({ payload: admin.toJSON() }), user: admin };
  }
}
module.exports = new AdminService();
