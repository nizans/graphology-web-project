const { unlink } = require('fs/promises');
const { join } = require('path');

//deletes images from public/images && public/thumbs after delete request
//imgObject = {full: <filename>, thumb: <filename>}
module.exports = deleteImages = async arrayOfImagesObjects => {
  if (Array.isArray(arrayOfImagesObjects)) {
    arrayOfImagesObjects.forEach(async img => {
      try {
        if (img.full) await unlink(join('public', img.full));
        if (img.thumb) await unlink(join('public', img.thumb));
        console.log(img.full + ' deleted');
        console.log(img.thumb + ' deleted');
      } catch (error) {
        console.error(error);
      }
    });
  }
};
