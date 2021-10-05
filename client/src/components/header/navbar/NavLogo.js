import logo from 'assets/icons/logo.svg';
import { DimensionsContext } from 'context/DimensionsContext';
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

const NavLogo = () => {
  const { windowWidth } = useContext(DimensionsContext);
  return (
    <NavLink to="/home" className="mr-auto sm:mr-0 sm:ml-auto">
      <img
        loading="eager"
        src={logo}
        width={windowWidth < 640 ? '125px' : '250px'}
        alt=""
        className="sm:w-3/4 mr-auto sm:ml-4 sm:mr-0 md:pl-4 lg:w-full"
      />
    </NavLink>
  );
};

export default NavLogo;
