const DAL = require('../../base/DAL');
const mailModel = require('./mail.model');

class MailDAL extends DAL {
  constructor() {
    super(mailModel, 'Mail');
  }

  async isEmailExists(email) {
    const exists = await this.Model.exists({ email: email });
    return exists;
  }

  async getMailPermissionsByEmail(email) {
    const mail = await this.Model.findOne({ email: email });
    return mail;
  }

  async createOrUpdate(data) {
    const mail = await this.Model.update({ email: data.email }, data, { upsert: true });
    return mail;
  }

  async delete(email) {
    const result = this.Model.findOneAndDelete({ email: email });
    return result;
  }

  async getAllBookOrderMails() {
    const result = await this.Model.find({ sendBookOrders: true });
    return result;
  }

  async getAllContactRequestMails() {
    const result = await this.Model.find({ sendContactRequests: true });
    return result;
  }
}

module.exports = new MailDAL();
