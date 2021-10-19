import { DimensionsContext } from 'context/DimensionsContext';
import useDimensions from 'hooks/useDimensions';
import React, { useContext, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { HeaderDropdownLinks as dropdownLinks, HeaderLinks as links } from './Header.links';
import Navbar from './navbar/Navbar';
import NavBurger from './navbar/NavBurger';

const Header = () => {
  const [headerRef, headerDimension] = useDimensions();
  const { setHeaderHeight, windowWidth: width, headerHeight } = useContext(DimensionsContext);

  useEffect(() => {
    if (headerDimension) setHeaderHeight(headerDimension.height);
  }, [headerDimension, setHeaderHeight]);

  return (
    <>
      <div ref={headerRef} className="w-full fixed top-0 flex justify-center bg-background z-50">
        <div className="px-2 xs:px-10 md:px-0 md:container w-full">
          {width < 640 ? (
            <NavBurger links={[...dropdownLinks, ...links]} />
          ) : (
            <Navbar links={links} dropdownLinks={dropdownLinks} />
          )}
        </div>
      </div>
      <div className="w-full" style={{ height: headerHeight }}></div>
    </>
  );
};

export default withRouter(Header);
