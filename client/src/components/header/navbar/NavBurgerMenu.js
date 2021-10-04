import logo from 'assets/icons/logo_subtitle.svg';
import Underline from 'components/UI/Underline';
import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import NavPhoneNumber from './NavPhoneNumber';
import Transition from 'react-transition-group/Transition';

const opacityTransitionTime = '0.3s';
const translateTrantisionTime = '0.15s';

export const NavBurgerMenu = ({ open, links = [], toggleOpen }) => {
  const divRef = useRef(null);

  return (
    <Transition in={open} timeout={{ enter: 0, exit: 600 }} unmountOnExit>
      {state => (
        <div
          ref={divRef}
          className="bg-background flex flex-col justify-between items-center h-screen text-right p-8 absolute top-0 right-0 left-0 bottom-0"
          style={{
            transition: `opacity ${opacityTransitionTime} linear ${
              state === 'entered' ? '0s' : state === 'exiting' ? translateTrantisionTime : null
            }`,
            opacity: state === 'entered' ? 1 : state === 'exiting' ? 0 : null,
          }}
        >
          <NavLink to="/home" onClick={toggleOpen}>
            <img loading="eager" src={logo} width="100%" alt="" className="mx-auto" />
          </NavLink>
          <div
            className="h-full flex flex-col"
            style={{
              transition: `transform ${translateTrantisionTime} linear ${open ? opacityTransitionTime : '0s'}`,
              transform: state === 'entered' ? 'translateY(0)' : state === 'exiting' ? 'translateY(100vh)' : null,
            }}
          >
            <div className="flex flex-col items-center w-full mt-auto">
              {links.map((navLink, i) => (
                <React.Fragment key={navLink.to}>
                  <NavLink
                    onClick={toggleOpen}
                    to={navLink.to}
                    className=" _text text-xl text-center whitespace-nowrap my-2"
                    activeClassName="text-p-blue-dark"
                  >
                    {navLink.name}
                  </NavLink>
                  {i !== links.length - 1 && <Underline className="w-1/4 divide-y" thickness="0" />}
                </React.Fragment>
              ))}
            </div>
            <span className="mt-auto">{open && <NavPhoneNumber />}</span>
          </div>
        </div>
      )}
    </Transition>
  );
};
