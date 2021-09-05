const https = require('https');

module.exports = async videoURL => {
  return new Promise((resolve, reject) => {
    const req = https.get(`https://noembed.com/embed?url=${videoURL}`, response => {
      response.setEncoding('utf8');
      let data = '';
      response.on('data', chunk => {
        data += chunk;
      });
      response.on('end', () => {
        resolve(JSON.parse(data).thumbnail_url);
      });
    });
    req.on('error', error => {
      console.log(error);
      reject(error);
    });
    req.end();
  });
};
