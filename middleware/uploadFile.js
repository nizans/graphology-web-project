const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/images');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '_' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + '_' + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (['jpeg', 'png', 'jpg'].includes(file.mimetype)) cb(null, true);
  else cb(null, false);
};

let uploadImage = multer({ storage: storage, fileFilter: fileFilter });

module.exports = uploadImage.single('image');
