const createFormData = (values, images = []) => {
  let formData = new FormData();
  for (const [key, val] of Object.entries(values)) {
    formData.append(key, val);
  }
  for (const img of images) {
    formData.append('image', img);
  }
  return formData;
};

export default createFormData;
