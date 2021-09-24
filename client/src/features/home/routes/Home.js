import React, { useContext, useEffect, useRef, useState } from 'react';
import BookShelf from '../components/Shelf/BookShelf';
import Section from 'components/common/Section';
import Expertise from '../components/Expertise/Expertise';
import Recommendations from '../components/Recommendations/Recommendations';
import Radio from '../components/Radio/Radio';
import OnTheCouch from '../components/OnTheCouch/OnTheCouch';
import Michal from '../components/Michal/Michal';
import { SectionHeightContext } from 'context/sectionHeightContext';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ContactUs from '../components/ContantUs/ContactUs';
import useDimensions from 'hooks/useDimensions';

export const Home = () => {
  const [michalRef, michalDim] = useDimensions();
  const { windowHeight, headerHeight, footerHeight } = useContext(SectionHeightContext);

  const handleReadMoreClick = async () => {
    window.scrollTo({
      behavior: 'smooth',
      top: michalDim?.top + window.scrollY - headerHeight,
    });
  };
  return (
    <>
      <Section minHeight={windowHeight - headerHeight} className="flex flex-col  mb-16">
        <BookShelf onReadMoreClick={handleReadMoreClick} />
      </Section>
      <Section minHeight={windowHeight - headerHeight} className=" mb-16">
        <Michal ref={michalRef} />
      </Section>
      <Section minHeight={windowHeight - headerHeight} className="flex flex-col justify-evenly mb-16">
        <Expertise />
      </Section>
      <Section minHeight={windowHeight - headerHeight} className="flex flex-col justify-around mb-16">
        <Recommendations />
      </Section>
      <Section minHeight={windowHeight - headerHeight} className="flex flex-col justify-evenly mb-16">
        <Radio />
      </Section>
      <Section minHeight={windowHeight - headerHeight} className="flex flex-col mb-16">
        <OnTheCouch />
      </Section>
      <Section minHeight={windowHeight - headerHeight - footerHeight} className="mb-16 lg:mb-0 flex items-center">
        <ContactUs />
      </Section>
    </>
  );
};
