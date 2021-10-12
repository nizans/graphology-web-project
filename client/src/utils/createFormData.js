import { checkValidImageSrc } from './checkValidImageSrc';
import { urlToObject } from './urlToObject';

const createFormData = async (values = {}, images) => {
  let formData = new FormData();
  for (const [key, val] of Object.entries(values)) {
    formData.append(key, val);
  }

  if (Array.isArray(images))
    for (const img of images) {
      if (img instanceof File) formData.append('image', img);
      if (checkValidImageSrc(img)) {
        const file = await urlToObject(img);
        formData.append('image', file);
      }
    }
  else if (images instanceof File) formData.append('image', images);

  return formData;
};

export default createFormData;
