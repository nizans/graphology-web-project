const send = require('../../lib/mailer');

const strings = {
  bookTitle: 'התקבלה הזמנת ספר חדשה',
  contactTitle: 'התקבלה בקשה ליצירת קשר',
  from: 'מאת: ',
  phone: 'טלפון: ',
  email: 'כתובת מייל: ',
  book: 'ספר: ',
  notes: 'הערות:',
  subject: 'נושא: ',
  orderSubject: 'התקבלה הזמנת ספר',
  contactSubject: 'התקבלה בקשה ליצירת קשר',
};
const automaticMessage = `<h5>זוהי הודעיה אוטומית</h5>`;

class ContactService {
  constructor() {}

  contact = async data => {
    const html = this.#generateTemplate(data, strings.contactTitle);
    const info = await send(html, strings.contactSubject);
    return info;
  };

  orderBook = async data => {
    const html = this.#generateTemplate(data, strings.bookTitle);
    const info = await send(html, strings.orderSubject);
    return info;
  };

  #generateTemplate(data, title) {
    title = `<h1>${title}</h1>`;
    const noteTitle = `<h3>${strings.notes}</h3>`;
    const template = {
      from: name => `<h3>${strings.from + name}</h3>`,
      phone: phone => `<h3>${strings.phone}<a href="tel:${phone}">${phone}</a></h3>`,
      email: email => `<h3>${strings.email}<a href="mailto:${email}">${email}</a></h3>`,
      book: book => `<h3>${strings.book}<a href=${book.url}>${book.title}</a></h3>`,
      subject: subject => `<h3>${strings.subject}:${subject}</h3>`,
      notes: notes => noteTitle + '\n' + `<p>${notes}</p>`,
    };
    let html = title;
    for (const [key, val] of Object.entries(data)) {
      if (template[key] instanceof Function) html += template[key](val) + '\n';
    }
    return '<body dir="rtl">' + html + automaticMessage + '</body>';
  }
}

module.exports = new ContactService();
