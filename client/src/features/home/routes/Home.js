import Section from 'components/common/Section';
import { DimensionsContext } from 'context/DimensionsContext';
import useDimensions from 'hooks/useDimensions';
import React, { useContext } from 'react';

import ContactUs from '../components/ContantUs/ContactUs';
import Expertise from '../components/Expertise/Expertise';
import Michal from '../components/Michal/Michal';
import MichalSpeechBubble, { MichalSpeechBubbleSmallScreen } from '../components/Michal/MichalSpeechBubble';
import OnTheCouch from '../components/OnTheCouch/OnTheCouch';
import Radio from '../components/Radio/Radio';
import Recommendations from '../components/Recommendations/Recommendations';
import BookShelf from '../components/Shelf/BookShelf';

export const Home = () => {
  const [michalRef, michalDim] = useDimensions();
  const { windowHeight, windowWidth, headerHeight, footerHeight } = useContext(DimensionsContext);

  const handleReadMoreClick = async () => {
    window.scrollTo({
      behavior: 'smooth',
      top: michalDim?.top + window.scrollY - headerHeight,
    });
  };
  return (
    <>
      <Section style={{ minHeight: windowHeight - headerHeight }} className="flex justify-center mb-16">
        <BookShelf onReadMoreClick={handleReadMoreClick} />
      </Section>
      <Section
        ref={michalRef}
        style={{ minHeight: windowHeight - headerHeight }}
        className="flex flex-col items-center mb-16"
      >
        {windowWidth >= 640 ? <MichalSpeechBubble /> : <MichalSpeechBubbleSmallScreen />}
        <Michal />
      </Section>
      <Section style={{ minHeight: windowHeight - headerHeight }} className="flex flex-col mb-16">
        <Expertise />
      </Section>
      <Section style={{ minHeight: windowHeight - headerHeight }} className="flex flex-col mb-16">
        <Recommendations />
      </Section>
      <Section style={{ minHeight: windowHeight - headerHeight }} className="flex flex-col mb-16">
        <Radio />
      </Section>
      <Section style={{ minHeight: windowHeight - headerHeight }} className="flex flex-col mb-16">
        <OnTheCouch />
      </Section>
      <Section style={{ minHeight: windowHeight - headerHeight - footerHeight }} className="mb-16 flex items-center">
        <ContactUs />
      </Section>
    </>
  );
};
