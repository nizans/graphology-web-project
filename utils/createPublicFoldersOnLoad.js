const fs = require('fs');

const createPublicFoldersOnLoad = () => {
  if (!fs.existsSync('./public')) {
    fs.mkdirSync('./public');
  }
  if (!fs.existsSync('./public/images')) {
    fs.mkdirSync('./public/images', { recursive: true });
  }
  if (!fs.existsSync('./public/thumbs')) {
    fs.mkdirSync('./public/thumbs', { recursive: true });
  }
};

module.exports = createPublicFoldersOnLoad;
