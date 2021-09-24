import { SectionHeightContext } from 'context/sectionHeightContext';
import useDimensions from 'hooks/useDimensions';
import useWindowDimensions from 'hooks/useWindowDimensions';
import React, { useContext, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import NavBurger from './navbar/NavBurger';

const dropdownLinks = [
  { name: 'אודות', to: '/home/about' },
  { name: 'כתבות', to: '/home/articles' },
];
const links = [
  {
    name: 'על ספת הגרפולוג',
    to: '/home/couch',
  },
  {
    name: 'ספרים',
    to: '/home/books',
  },
  {
    name: 'שירות גרפולוגי',
    to: '/home/services',
  },
  {
    name: 'צור קשר',
    to: '/home/contact',
  },
];

const Header = () => {
  const [headerRef, headerDimension] = useDimensions();
  const { width } = useWindowDimensions();
  const sectionHeightCTX = useContext(SectionHeightContext);

  useEffect(() => {
    if (headerDimension) sectionHeightCTX.setHeaderHeight(headerDimension.height);
  }, [headerDimension, sectionHeightCTX]);
  return (
    <>
      <div ref={headerRef} className="w-full fixed top-0 flex justify-center bg-background z-50">
        <div className="px-8 sm:px-2 md:container font-light _text-3xl py-1 w-full">
          {width < 640 ? (
            <NavBurger links={[...dropdownLinks, ...links]} />
          ) : (
            <Navbar links={links} dropdownLinks={dropdownLinks} />
          )}
        </div>
      </div>

      <div style={{ height: headerDimension?.height }}></div>
    </>
  );
};

export default withRouter(Header);
