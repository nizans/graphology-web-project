import React from 'react';

const ImageCard = ({ children, imgComponent }) => {
  return (
    <div className="bg-p-brown border-p-brown border-2 rounded-lg overflow-hidden" style={{ height: 'min-content' }}>
      {imgComponent}
      <div className="flex items-center p-2 justify-between ">{children}</div>
    </div>
  );
};

export default ImageCard;
