const multer = require('multer');
const imageResizer = require('../utils/imageResizer');
const generateUniqueID = require('../utils/generateUniqueID');
const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './public/images');
  },
  filename: function (req, file, callback) {
    const uniqueSuffix = generateUniqueID(2, '-');
    callback(null, uniqueSuffix + '_' + file.originalname);
  },
});

const fileFilter = async (req, file, callback) => {
  if (['jpeg', 'png', 'jpg', 'svg+xml'].includes(file.mimetype.split('/')[1])) {
    callback(null, true);
  } else callback(null, false);
};

let uploadImage = multer({ storage: storage, fileFilter: fileFilter });

const addImagePrefix = (req, res, next) => {
  if (req.files) {
    const images = req.files.map(img => {
      return { full: '/images/' + img.filename, thumb: '/thumbs/' + img.filename };
    });
    req.body.images = images;
  }
  next();
};

module.exports = [uploadImage.array('image'), imageResizer, addImagePrefix];
