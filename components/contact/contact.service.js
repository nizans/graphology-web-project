const { generateHtmlTemplate } = require('../../lib/mailer/htmlGenerate');
const send = require('../../lib/mailer/mailer');
const mailService = require('../mail/mail.service');

const strings = {
  orderSubject: 'התקבלה הזמנת ספר',
  contactSubject: 'התקבלה בקשה ליצירת קשר',
};

class ContactService {
  constructor() {}

  contact = async data => {
    const emails = await mailService.getAllContactRequestMails();
    return await this.#sendContactRequestMail(data, emails);
  };

  orderBook = async data => {
    const emails = await mailService.getAllBookOrderMails();
    return await this.#sendBookOrderMail(data, emails);
  };

  #sendBookOrderMail = async (book, emails) => {
    const html = generateHtmlTemplate(book, strings.orderSubject);
    const info = await send({ html: html, subject: strings.orderSubject, to: emails });
    return info;
  };

  #sendContactRequestMail = async (contactInfo, emails) => {
    const html = generateHtmlTemplate(contactInfo, strings.contactSubject);
    const info = await send({ html: html, subject: strings.contactSubject, to: emails });
    return info;
  };
}

module.exports = new ContactService();
