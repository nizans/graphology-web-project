const sharp = require('sharp');
const { readFileSync } = require('fs');
const THUMB_SIZE = 8;

module.exports = (req, res, next) => {
  if (req.files) {
    req.files.forEach(element => {
      const { filename, path } = element;
      const image = readFileSync(path);
      sharp(image)
        .resize(THUMB_SIZE)
        .toFile(`public/thumbs/` + filename, (err, info) => {
          if (err) console.log(err);
        });
    });
    console.log('Created ' + req.files.length + ' thumbs');
  }
  if (req.file) {
    const { filename, path } = req.file;
    const image = readFileSync(path);
    sharp(image)
      .resize(THUMB_SIZE)
      .toFile(`public/thumbs/` + filename, (err, info) => {
        if (err) console.log(err);
      });
    console.log('Create an image thumb');
  }
  next();
};
