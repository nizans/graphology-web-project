const imagesToS3ObjectsArray = images => {
  const S3Objects = [];
  images.forEach(img => {
    S3Objects.push({
      Key: img.full
        .split('/')
        .filter((_, i) => i !== 0)
        .join('/'),
    });
    S3Objects.push({
      Key: img.thumb
        .split('/')
        .filter((_, i) => i !== 0)
        .join('/'),
    });
  });
  return S3Objects;
};

module.exports = imagesToS3ObjectsArray;
