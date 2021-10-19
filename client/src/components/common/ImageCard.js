import React from 'react';

const ImageCard = ({ children, imgComponent, style }) => {
  return (
    <div
      className="bg-p-brown border-p-brown border rounded-lg overflow-hidden"
      style={{ height: 'min-content', ...style }}
    >
      {imgComponent}
      <div className="flex items-center p-2 justify-between ">{children}</div>
    </div>
  );
};

export default ImageCard;
