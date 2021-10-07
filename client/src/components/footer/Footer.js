import React, { useContext, useEffect } from 'react';
import Logo from 'assets/icons/logo_subtitle.svg';
import FBIcon from 'assets/icons/fb_logo.svg';
import Shelf from 'assets/icons/brown_shelf.svg';
import { NavLink } from 'react-router-dom';
import useDimensions from 'hooks/useDimensions';
import { DimensionsContext } from 'context/DimensionsContext';
import { FooterStrings as strings } from './Footer.strings';

const Footer = () => {
  const [footerRef, footerDimension] = useDimensions();
  const { setFooterHeight, windowWidth } = useContext(DimensionsContext);
  useEffect(() => {
    if (footerDimension) setFooterHeight(footerDimension.height);
  }, [footerDimension, setFooterHeight]);
  return (
    <footer ref={footerRef} className="w-full flex flex-col justify-between items-center mx-auto box-content ">
      <img loading="lazy" src={Shelf} alt="" className="w-full" />
      <div className="w-full flex-col flex lg:flex-row justify-between items-center mx-auto mt-4 _text _p-size lg:font-normal font-thin whitespace-nowrap">
        <NavLink to="/home/about" className=" my-2 lg:my-0">
          {strings.about}
        </NavLink>

        <a
          href="https://he.wikipedia.org/wiki/%D7%9E%D7%99%D7%9B%D7%9C_%D7%93%D7%95%D7%A8%D7%95%D7%9F"
          className="my-2 lg:my-0  "
        >
          {strings.michalDoron}
          <span className="font-bold underline ">{strings.wiki}</span>
        </a>

        <NavLink to="/home/contact" className=" my-2 lg:my-0 order-last lg:order-none">
          {strings.contact}
        </NavLink>

        {windowWidth >= 1024 && (
          <NavLink className="order-none my-4 sm:my-0" to="/home">
            <img
              loading="eager"
              src={Logo}
              alt=""
              onLoad={() => {
                window.dispatchEvent(new Event('resize'));
              }}
            />
          </NavLink>
        )}

        <a href="https://www.facebook.com/md1062" className="flex items-center my-2 lg:my-0 ">
          <img className="" loading="lazy" src={FBIcon} alt=""></img>
          {strings.fb}
        </a>
        {windowWidth >= 1024 && <NavLink to="/home/books">{strings.books}</NavLink>}

        {windowWidth >= 1024 && <NavLink to="/home/services">{strings.lectures}</NavLink>}
      </div>
      <h5 className="_text text-lg mt-2">{strings.copyrights}</h5>
    </footer>
  );
};

export default Footer;
