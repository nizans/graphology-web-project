const { unlink } = require('fs/promises');
const path = require('path');
const { join } = require('path');
const { IMAGE_PATH_PREFIX, THUMBS_PATH_PREFIX } = require('../config/constants');

//deletes images from public/images && public/thumbs after delete request
//imgObject = {full: <filename>, thumb: <thumbnail>}
module.exports = deleteImages = async arrayOfImagesObjects => {
  if (Array.isArray(arrayOfImagesObjects)) {
    arrayOfImagesObjects.forEach(async img => {
      try {
        if (img.full) await unlink(path.join('public', img.full));
        if (img.thumb) await unlink(path.join('public', img.thumb));
        console.log(img.full + ' deleted');
        console.log(img.thumb + ' deleted');
      } catch (error) {
        console.error(error);
        throw error;
      }
    });
  }
};
