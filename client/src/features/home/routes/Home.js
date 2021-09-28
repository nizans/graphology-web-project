import Section from 'components/common/Section';
import { DimensionsContext } from 'context/DimensionsContext';
import useDimensions from 'hooks/useDimensions';
import React, { useContext } from 'react';

import ContactUs from '../components/ContantUs/ContactUs';
import Expertise from '../components/Expertise/Expertise';
import Michal from '../components/Michal/Michal';
import OnTheCouch from '../components/OnTheCouch/OnTheCouch';
import Radio from '../components/Radio/Radio';
import Recommendations from '../components/Recommendations/Recommendations';
import BookShelf from '../components/Shelf/BookShelf';

export const Home = () => {
  const [michalRef, michalDim] = useDimensions();
  const { windowHeight, headerHeight, footerHeight } = useContext(DimensionsContext);

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
      <Section minHeight={windowHeight - headerHeight} className="flex flex-col mb-16">
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
