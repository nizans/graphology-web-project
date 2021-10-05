import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Arrow } from 'assets/icons/Arrow.svg';

const strings = {
  readMore: 'קרא עוד',
};
const ReadMoreBtn = ({ className, to, asArrow }) => {
  return (
    <NavLink
      to={to}
      className={`underline _text-bold text-3xl hover:text-p-brown inline-flex  ${className ? className : ''}`}
    >
      {asArrow ? <Arrow width="100%" height="30px" transform="rotate(180)" /> : strings.readMore}
    </NavLink>
  );
};

export default ReadMoreBtn;
