import BlurredUpImage from 'components/UI/BlurredUpImage';
import useForceUpdate from 'hooks/useForceUpdate';
import React, { useEffect, useState } from 'react';
import { checkValidImageSrc } from 'utils/checkValidImageSrc';

const MultiSourceImageParse = ({
  image,
  height = '150px',
  width = '150px',
  withModal = false,
  objectFit = 'cover',
}) => {
  const forceUpdate = useForceUpdate();

  const [imageSrc, setImageSrc] = useState('');
  const [thumbSrc, setThumbSrc] = useState('');

  useEffect(() => {
    getImageSrc();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    forceUpdate();
  }, [imageSrc, thumbSrc]); // eslint-disable-line react-hooks/exhaustive-deps

  const getImageSrc = () => {
    if (Array.isArray(image) && image.length >= 1) {
      setImageSrc(image[0].full);
      setThumbSrc(image[0].thumb);
    } else if (checkValidImageSrc(image)) {
      setImageSrc(image);
    }
  };

  
  return (
    <BlurredUpImage
      width={width}
      height={height}
      withModal={withModal}
      img={{ full: imageSrc, thumb: thumbSrc }}
      style={{ objectFit }}
    />
  );
};

export default MultiSourceImageParse;
