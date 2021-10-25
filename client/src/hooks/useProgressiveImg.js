import { useEffect, useState } from 'react';

const useProgressiveImg = (lowQualitySrc = 'https://via.placeholder.com/16/16', highQualitySrc) => {
  const [src, setSrc] = useState(lowQualitySrc);
  useEffect(() => {
    setSrc(lowQualitySrc);
    const img = new Image();
    img.onload = () => {
      setSrc(highQualitySrc);
    };
    img.src = highQualitySrc;
  }, [lowQualitySrc, highQualitySrc]);

  return [src, { blur: src === lowQualitySrc }];
};
export default useProgressiveImg;
