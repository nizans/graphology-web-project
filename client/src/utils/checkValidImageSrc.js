export const checkValidImageSrc = src => {
  let valid = true;
  const img = new Image();
  img.onerror = () => (valid = false);
  img.src = src;
  return valid;
};
