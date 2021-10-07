import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Arrow } from 'assets/icons/Arrow.svg';
import { HEB_READ_MORE } from 'strings/common';

const ReadMoreBtn = ({ className, to, asArrow }) => {
  return (
    <NavLink
      to={to}
      className={`underline _text-bold text-3xl hover:text-p-brown inline-flex  ${className ? className : ''}`}
    >
      {asArrow ? <Arrow width="100%" height="30px" transform="rotate(180)" /> : HEB_READ_MORE}
    </NavLink>
  );
};

export default ReadMoreBtn;
