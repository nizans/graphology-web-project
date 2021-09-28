const { HOSTNAME } = require('../../config/constants');

const strings = {
  from: 'מאת: ',
  phone: 'טלפון: ',
  email: 'כתובת מייל: ',
  book: 'ספר: ',
  notes: 'הערות:',
  subject: 'נושא: ',
  passwordReset: 'התקבלה בקשה לאיפוס סיסמא. לחץ על הלינק כדי לאפס את הסיסמא, ישלח מייל עם סיסמא חדשה',
  passwordResetTitle: 'איפוס סיסמא',
  passwordResetSuccess: 'הסיסמא אופסה בהצלחה',
  passwordResetDesc: 'ניתן להתחבר עם הסיסמא החדשה, מומלץ לשנות את הסיסמא לסיסמא אחרת.',
  password: 'סיסמא חדשה:',
};
const automaticMessage = `<h5>זוהי הודעיה אוטומית</h5>`;

exports.generateHtmlTemplate = (data, title) => {
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
};

exports.passwordResetRequestTemplate = token => {
  const title = `<h1>${strings.passwordResetTitle}</h1>`;
  const desc = `<h3>${strings.passwordReset}</h3>`;
  const link = `<a href=${HOSTNAME + `/api/admins/resetPassword/${token}`}>${strings.passwordResetTitle}</a>`;
  return '<body dir="rtl">' + title + desc + link + '</body>';
};

exports.newPasswordTemplate = newPassword => {
  const title = `<h1>${strings.passwordResetSuccess}</h1>`;
  const desc = `<h3>${strings.passwordResetDesc}</h3>`;
  const newPasswordTitle = `<h3>${strings.password}</h3>`;
  const password = `<div style="border: 1px solid black">${newPassword}</div>`;
  return '<body dir="rtl">' + title + desc + newPasswordTitle + password + '</body>';
};
