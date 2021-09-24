import Underline from 'components/UI/Underline';
import React from 'react';
import { NavLink } from 'react-router-dom';
import NavPhoneNumber from './NavPhoneNumber';

export const NavBurgerMenu = ({ open, links = [] }) => {
  return (
    <div
      className="bg-p-brown flex flex-col justify-center h-screen text-right p-8 absolute top-0 right-0 w-1/2 divide-y-2"
      style={{
        transition: 'transform 0.3s ease-in-out',
        transform: !open ? 'translateX(calc(100% + 0.5rem)' : 'translateX(0.5rem)',
      }}>
      {links.map(navLink => (
        <NavLink
          to={navLink.to}
          key={navLink.to}
          className=" _text-bold-5xl py-4"
          activeClassName="text-p-blue-dark"
          style={{ transition: 'color 0.3s linear' }}>
          {navLink.name}
        </NavLink>
      ))}
      <NavPhoneNumber />
    </div>
  );
};
