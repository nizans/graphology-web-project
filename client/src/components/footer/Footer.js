import React, { useContext, useEffect } from 'react';
import Logo from '../../assets/icons/logo_subtitle.svg';
import FBIcon from '../../assets/icons/fb_logo.svg';
import Shelf from '../../assets/icons/brown_shelf.svg';
import { NavLink } from 'react-router-dom';
import useDimensions from 'hooks/useDimensions';
import { SectionHeightContext } from 'context/sectionHeightContext';

const strings = {
  about: 'אודות',
  michalDoron: 'מיכל דורון ב',
  wiki: 'ויקיפדיה',
  contact: 'צור קשר',
  fb: 'פייסבוק',
  books: 'ספרים',
  lectures: 'סדנאות והרצאות',
  copyrights: 'כל הזכויות שמורות © מיכל דורון ייעוץ ואבחון גרפולוגית',
};

const Footer = () => {
  const [footerRef, footerDimension] = useDimensions();
  const sectionHeightCTX = useContext(SectionHeightContext);
  useEffect(() => {
    if (footerDimension) sectionHeightCTX.setFooterHeight(footerDimension.height);
  }, [footerDimension, sectionHeightCTX]);
  return (
    <footer
      ref={footerRef}
      className="w-full flex flex-col justify-between items-center text-3xl sm:text-3xl _text-3xl mx-auto box-content">
      <img loading="lazy" src={Shelf} alt="" className="w-full" />
      <div className="w-full flex-col flex lg:flex-row justify-between items-center mx-auto py-10 relative">
        <NavLink to="/home/about" className="px-4 my-4 sm:my-0 ">
          {strings.about}
        </NavLink>
        <a
          href="https://he.wikipedia.org/wiki/%D7%9E%D7%99%D7%9B%D7%9C_%D7%93%D7%95%D7%A8%D7%95%D7%9F"
          className="px-4 my-4 sm:my-0">
          {strings.michalDoron}
          <span className="font-bold underline">{strings.wiki}</span>
        </a>
        <NavLink to="/home/contact" className="px-4 my-4 sm:my-0 ">
          {strings.contact}
        </NavLink>

        <NavLink className="order-first lg:order-none my-4 sm:my-0 " to="/home">
          <img
            loading="lazy"
            src={Logo}
            alt=""
            onLoad={() => {
              window.dispatchEvent(new Event('resize'));
            }}
          />
        </NavLink>

        <a href="https://www.facebook.com/md1062" className="px-4 flex items-center my-4 sm:my-0 ">
          <img loading="lazy" src={FBIcon} alt=""></img>
          {strings.fb}
        </a>
        <NavLink to="/home/books" className="px-4 my-4 sm:my-0 ">
          {strings.books}
        </NavLink>
        <NavLink to="/home" className="px-4 my-4 sm:my-0 ">
          {strings.lectures}
        </NavLink>
      </div>
      <h5 className="_text-lg">{strings.copyrights}</h5>
    </footer>
  );
};

export default Footer;
