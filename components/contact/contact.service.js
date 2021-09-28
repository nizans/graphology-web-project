const { generateHtmlTemplate } = require('../../lib/mailer/htmlGenerate');
const send = require('../../lib/mailer/mailer');

const strings = {
  orderSubject: 'התקבלה הזמנת ספר',
  contactSubject: 'התקבלה בקשה ליצירת קשר',
  bookTitle: 'התקבלה הזמנת ספר חדשה',
  contactTitle: 'התקבלה בקשה ליצירת קשר',
};

class ContactService {
  constructor() {}

  contact = async data => this.#sendContactRequestMail(data);

  orderBook = async data => this.#sendBookOrderMail(data);

  #sendBookOrderMail = async book => {
    const html = generateHtmlTemplate(book, strings.orderSubject);
    const info = await send(html, strings.contactSubject);
    return info;
  };

  #sendContactRequestMail = async contactInfo => {
    const html = generateHtmlTemplate(contactInfo, strings.orderSubject);
    const info = await send(html, strings.contactSubject);
    return info;
  };
}

module.exports = new ContactService();
