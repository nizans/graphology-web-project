const { uploadFile } = require('../lib/s3');
const path = require('path');
const handleError = require('../components/error/handleError');

const uploadToS3 = async (req, res, next) => {
  try {
    const imageArray = req.body.images;
    const singleImage = req.body.image;

    if (imageArray) await uploadHelper(imageArray);
    if (singleImage) {
      const fullPath = path.join(process.cwd(), 'public', singleImage.full);
      const fullName = singleImage.full.split('/')[2];
      const thumbPath = path.join(process.cwd(), 'public', singleImage.thumb);
      const thumbName = singleImage.thumb.split('/')[2];
      await uploadFile(fullPath, fullName);
      await uploadFile(thumbPath, thumbName);
    }
    next();
  } catch (error) {
    handleError(error);
  }
};

const uploadHelper = async files => {
  const arr = [];
  for (let i = 0; i < files.length; i++) {
    const fullPath = path.join(process.cwd(), 'public', files[i].full);
    const fullName = files[i].full.split('/')[2];
    const thumbPath = path.join(process.cwd(), 'public', files[i].thumb);
    const thumbName = files[i].thumb.split('/')[2];
    const fullResult = (await uploadFile(fullPath, 'images/' + fullName)).Location;
    const thumbResult = (await uploadFile(thumbPath, 'thumbs/' + thumbName)).Location;
    arr.push({ full: fullResult, thumb: thumbResult });
  }
  return arr;
};

module.exports = uploadToS3;
