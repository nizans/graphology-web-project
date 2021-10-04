import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from 'assets/icons/logo.svg';
import NavPhoneNumber from './NavPhoneNumber';

const NavLogo = () => {
  return (
    <NavLink to="/home" className="mr-auto sm:mr-0 sm:ml-auto">
      <img
        loading="eager"
        src={logo}
        width="260px"
        alt=""
        className="w-3/4 mr-auto sm:ml-4 sm:mr-0 md:pl-4 lg:w-full"
      />
    </NavLink>
  );
};

export default NavLogo;
