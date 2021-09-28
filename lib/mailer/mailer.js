const nodemailer = require('nodemailer');
const { SENDGRID_API_KEY, FROM_EMAIL_ADDRESS } = require('../../config/constants');
var sgTransport = require('nodemailer-sendgrid-transport');

const sendGridOptions = SENDGRID_API_KEY
  ? {
      auth: {
        api_key: SENDGRID_API_KEY,
      },
    }
  : null;

async function send(options) {
  const { html, subject = 'Hello ✔', from = FROM_EMAIL_ADDRESS, to = 'nizans0@gmail.com' } = options;
  const testAccount = await nodemailer.createTestAccount();
  const transporterSettings = {
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  };

  const transporter = nodemailer.createTransport(sendGridOptions ? sgTransport(sendGridOptions) : transporterSettings);
  const info = await transporter.sendMail({
    from: from,
    to: to,
    subject: subject,
    html: html,
  });
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  return info;
}

module.exports = send;
