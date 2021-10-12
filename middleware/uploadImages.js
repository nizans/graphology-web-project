const multer = require('multer');
const imageResizer = require('../utils/imageResizer');
const generateUniqueID = require('../utils/generateUniqueID');
const { IMAGE_PATH_PREFIX, THUMBS_PATH_PREFIX } = require('../config/constants');
const uploadToS3 = require('./uploadToS3');
const deleteTempImages = require('./deleteTempImages');

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
      return { full: IMAGE_PATH_PREFIX + img.filename, thumb: THUMBS_PATH_PREFIX + img.filename };
    });
    req.body.images = images;
  } else if (req.file) {
    const img = req.file;
    req.body.image = { full: IMAGE_PATH_PREFIX + img.filename, thumb: THUMBS_PATH_PREFIX + img.filename };
  }

  next();
};

/**
 *  Upload images to public folder -> create local thumb for each image -> add path prefix to each file
 *  -> upload to s3 bucket -> delete local files -> next()
 */

exports.uploadImages = [uploadImage.array('image'), imageResizer, addImagePrefix, uploadToS3, deleteTempImages];
exports.uploadImage = [uploadImage.single('image'), imageResizer, addImagePrefix, uploadToS3, deleteTempImages];
