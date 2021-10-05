import ResponsiveSlider from 'components/common/ResponsiveSlider/ResponsiveSlider';
import BlurredUpImage from 'components/UI/BlurredUpImage';
import { DimensionsContext } from 'context/DimensionsContext';
import React, { useContext } from 'react';

const ImageBox = ({ images, height, withModal = true, objectFit = 'contain' }) => {
  const { windowWidth } = useContext(DimensionsContext);

  return images?.length > 0 ? (
    <div>
      <ResponsiveSlider withThreeSlider={false}>
        {images.map(img => (
          <div className="w-full" key={img.full}>
            <BlurredUpImage
              withModal={windowWidth >= 768 && withModal}
              height={height}
              img={img}
              key={img.full}
              style={{ objectFit }}
            />
          </div>
        ))}
      </ResponsiveSlider>
    </div>
  ) : null;
};

export default ImageBox;
