const mailDAL = require('./mail.DAL');

const mailPermissionsStrings = {
  sendBookOrders: 'bookOrders',
  sendContactRequests: 'contactRequests',
};

class MailService {
  constructor() {
    this.DAL = mailDAL;
  }

  async createOrUpdate(email, mailPermissions) {
    const data = {
      email: email,
      sendBookOrders: mailPermissions.includes(mailPermissionsStrings.sendBookOrders),
      sendContactRequests: mailPermissions.includes(mailPermissionsStrings.sendContactRequests),
    };
    this.DAL.createOrUpdate(data);
  }

  async getMailPermissionsByEmail(email) {
    const result = await this.DAL.getMailPermissionsByEmail(email);
    const data = [];
    if (result) {
      if (result.sendBookOrders) data.push(mailPermissionsStrings.sendBookOrders);
      if (result.sendContactRequests) data.push(mailPermissionsStrings.sendContactRequests);
    }
    console.log(data);
    return data;
  }

  async delete(email) {
    const result = await this.DAL.delete(email);
    return result;
  }

  async getAllBookOrderMails() {
    const mails = await this.DAL.getAllBookOrderMails();
    return mails.map(mail => mail.email);
  }

  async getAllContactRequestMails() {
    const mails = await this.DAL.getAllContactRequestMails();
    return mails.map(mail => mail.email);
  }
}

module.exports = new MailService();
