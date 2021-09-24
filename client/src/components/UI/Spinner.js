import useWindowDimensions from 'hooks/useWindowDimensions';
import React from 'react';
import './Spinner.css';
const Spinner = ({ className = '', size = 120, speed = 2, style, bgColor = '#DFBBA6', fgColor = '#005885' }) => {
  const { width } = useWindowDimensions();
  if (width < 640) size *= 0.5;
  return (
    <div
      className={'w-full h-full flex items-center justify-center top-0 right-0 left-0 bottom-0 absolute'}
      style={{ ...style }}>
      <span
        className={'loader ml-2' + className}
        style={{
          border: `${Math.ceil(size * 0.13)}px solid ${bgColor}`,
          borderRadius: '50%',
          borderTop: `${Math.ceil(size * 0.13)}px solid ${fgColor}`,
          width: size,
          height: size,
          WebkitAnimation: `spin ${speed}s linear infinite`,
          animation: `spin ${speed}s linear infinite`,
        }}
      />
    </div>
  );
};

export default Spinner;
