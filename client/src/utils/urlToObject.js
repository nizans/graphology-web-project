export const urlToObject = async imgSrc => {
  const response = await fetch(imgSrc);
  const blob = await response.blob();
  const file = new File([blob], 'randomImage.jpg', { type: blob.type });
  return file;
};
