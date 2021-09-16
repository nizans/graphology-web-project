const nodemailer = require('nodemailer');

async function send(html, subject = 'Hello ✔', from = '"Fred Foo 👻" <foo@example.com>', to = 'nizans0@gmail.com') {
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
  const transporter = nodemailer.createTransport(transporterSettings);
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
