const { uploadFile } = require('../lib/s3');
const path = require('path');
const handleError = require('../components/error/handleError');

const getNameAndPathFromImageObj = imageObject => {
  const fullPath = path.join(process.cwd(), 'public', imageObject.full);
  const fullName = 'images/' + imageObject.full.split('/')[2];
  const thumbPath = path.join(process.cwd(), 'public', imageObject.thumb);
  const thumbName = 'thumbs/' + imageObject.thumb.split('/')[2];
  return { fullPath, fullName, thumbName, thumbPath };
};
const uploadToS3 = async (req, res, next) => {
  try {
    const imageArray = req.body.images;
    const singleImage = req.body.image;
    if (imageArray) await uploadHelper(imageArray);
    if (singleImage) {
      const { fullPath, fullName, thumbPath, thumbName } = getNameAndPathFromImageObj(singleImage);
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
    const { fullPath, fullName, thumbPath, thumbName } = getNameAndPathFromImageObj(files[i]);
    const fullResult = (await uploadFile(fullPath, fullName)).Location;
    const thumbResult = (await uploadFile(thumbPath, thumbName)).Location;
    arr.push({ full: fullResult, thumb: thumbResult });
  }
  return arr;
};

module.exports = uploadToS3;
