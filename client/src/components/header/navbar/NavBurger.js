import { useOnClickOutside } from 'hooks/useOnOutsideClick';
import React, { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import NavBurgerButton from './NavBurgerButton';
import { NavBurgerMenu } from './NavBurgerMenu';
import NavLogo from './NavLogo';
import { ReactComponent as SearchIcon } from 'assets/icons/searchIcon.svg';
import NavSearchBar from './NavSearchBar';
import { useLocation } from 'react-router';

const NavBurger = ({ links }) => {
  const { pathname } = useLocation();

  const [open, setOpen] = useState(false);
  const [showSearchIcon, setShowSearchIcon] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    console.log(pathname);
    if (pathname === '/home/couch') setShowSearchIcon(true);
    else setShowSearchIcon(false);
  }, [pathname]);

  useOnClickOutside(ref, () => setOpen(false));
  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <nav ref={ref} className="flex justify-between items-center">
      <NavBurgerButton open={open} toggleOpen={toggleOpen} />
      <NavBurgerMenu open={open} toggleOpen={toggleOpen} links={links} />
      {showSearchIcon && (
        <button className="mr-14">
          <SearchIcon fill="#DFBBA6" stroke="#DFBBA6" onClick={() => setShowSearchInput(true)} />
        </button>
      )}
      {showSearchInput && <NavSearchBar closeSearchBar={() => setShowSearchInput(false)} />}
      <NavLogo />
    </nav>
  );
};

export default NavBurger;
