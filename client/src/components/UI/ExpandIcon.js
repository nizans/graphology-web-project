import React from 'react';
import ExpandIconSVG from '../../assets/icons/expand_icon.svg';

const ExpandIcon = ({ width = 30, onClick, style }) => {
  return (
    <img
      onClick={onClick}
      loading="eager"
      alt=""
      src={ExpandIconSVG}
      className="absolute z-40 cursor-pointer"
      width={width + 'px'}
      style={{ ...style }}
    />
  );
};

export default ExpandIcon;
