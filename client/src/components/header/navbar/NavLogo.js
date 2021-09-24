import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/icons/logo.svg';
import NavPhoneNumber from './NavPhoneNumber';

const NavLogo = () => {
  return (
    <div className=" mr-auto sm:mr-0  flex md:px-4 justify-between items-center lg:divide-x-2 divide-p-brown lg:divide-x-reverse lg:px-0">
      <NavLink to="/home" className="justify-end sm:justify-start flex items-center">
        <img loading="eager" src={logo} width="260px" alt="" className="w-3/4 pr-4 lg:pr-0 lg:w-full pl-4 " />
      </NavLink>
      <NavPhoneNumber />
    </div>
  );
};

export default NavLogo;
