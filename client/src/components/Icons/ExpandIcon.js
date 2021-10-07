import React from 'react';
import { ReactComponent as ExpandIconSVG } from 'assets/icons/expand_icon.svg';

const ExpandIcon = ({ width = 30, onClick, style }) => {
  return (
    <ExpandIconSVG
      onClick={onClick}
      width={width + 'px'}
      className="absolute z-40 cursor-pointer"
      style={{ ...style }}
    />
  );
};

export default ExpandIcon;
