import { useOnClickOutside } from 'hooks/useOnOutsideClick';
import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import NavBurgerButton from './NavBurgerButton';
import { NavBurgerMenu } from './NavBurgerMenu';
import NavLogo from './NavLogo';

const NavBurger = ({ links }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useOnClickOutside(ref, () => setOpen(false));
  const toggleOpen = () => {
    setOpen(!open);
  };
  return (
    <nav ref={ref} className="flex justify-between items-center">
      <NavBurgerButton open={open} toggleOpen={toggleOpen} />
      <NavBurgerMenu open={open} toggleOpen={toggleOpen} links={links} />
      <NavLogo />
    </nav>
  );
};

export default NavBurger;
