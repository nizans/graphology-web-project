import BlurredUpImage from 'components/UI/BlurredUpImage';
import useForceUpdate from 'hooks/useForceUpdate';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { checkValidImageSrc } from 'utils/checkValidImageSrc';

const TableItemImage = ({
  image,
  height = '150px',
  width = '150px',
  withModal = false,
  imgClassName = 'h-full m-2 rounded-md border-2 border-p-brown',
  style = { objectFit: 'cover' },
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
      imgClassName={imgClassName}
      imageSrc={imageSrc}
      tinySrc={thumbSrc}
      style={style}
    />
  );
};

export default TableItemImage;
