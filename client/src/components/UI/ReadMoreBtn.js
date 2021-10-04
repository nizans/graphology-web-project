import React from 'react';
import { NavLink } from 'react-router-dom';
const strings = {
  readMore: 'קרא עוד',
};
const ReadMoreBtn = ({ className, to }) => {
  return (
    <NavLink
      to={to}
      className={`underline _text-bold text-3xl hover:text-p-brown inline-flex  ${className ? className : ''}`}>
      {strings.readMore}
    </NavLink>
  );
};

export default ReadMoreBtn;
