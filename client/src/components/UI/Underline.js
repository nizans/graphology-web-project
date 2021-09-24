import React from 'react';

const Underline = ({ thickness, className, style }) => {
  return (
    <div className={`flex flex-col divide-p-brown divide-y-${thickness ? thickness : '4'} ${className}`} style={style}>
      <span></span>
      <span></span>
    </div>
  );
};

export default Underline;
