const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './public/images');
  },
  filename: function (req, file, callback) {
    const uniqueSuffix = Date.now() + '_' + Math.round(Math.random() * 1e6);
    callback(null, uniqueSuffix + '_' + file.originalname);
  },
});

const fileFilter = (req, file, callback) => {
  if (['jpeg', 'png', 'jpg'].includes(file.mimetype.split('/')[1])) callback(null, true);
  else callback(null, false);
};

let uploadImage = multer({ storage: storage, fileFilter: fileFilter });

module.exports = uploadImage.single('image');
