import BlueRectangle from 'assets/icons/Blue Rectangle.svg';
import BlueTriangle from 'assets/icons/Blue triangle.svg';
import Quotes from 'assets/icons/quotes_icon.svg';
import SpeechBubble from 'assets/icons/speech_bubble.svg';
import React from 'react';

const strings = {
  bubbleTextLine1: 'כשם שאין בעולם שתי טביעות ',
  bubbleTextLine2: 'אצבע זהות אין בעולם שני',
  bubbleTextLine3: 'כתבי יד זהים',
};

const BubbleText = () => (
  <>
    <h3 className="whitespace-nowrap">{strings.bubbleTextLine1}</h3>
    <h3 className="whitespace-nowrap">{strings.bubbleTextLine2}</h3>
    <h3 className="whitespace-nowrap">{strings.bubbleTextLine3}</h3>
  </>
);

const MichalSpeechBubble = () => {
  return (
    <div className=" sm:w-1/2 relative transform translate-y-14 md:translate-y-16 mb-10">
      <img loading="eager" className="mx-auto" src={SpeechBubble} alt="" />
      <img
        loading="eager"
        alt=""
        src={Quotes}
        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />
      <span
        className="absolute left-0 right-0 text-p-brown-light text-xl sm:text-2xl lg:text-4xl xl:text-5xl text-center italic"
        style={{ top: '22.214%', bottom: '44.58' }}
      >
        <BubbleText />
      </span>
    </div>
  );
};

export const MichalSpeechBubbleSmallScreen = () => {
  return (
    <div className="relative transform translate-y-12">
      <img src={BlueRectangle} alt="" />
      <img
        loading="eager"
        alt=""
        src={Quotes}
        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />
      <img className="mr-auto w-1/6" src={BlueTriangle} style={{ marginLeft: '20%' }} alt="" />
      <span
        className="absolute left-0 right-0 text-p-brown-light text-2xl xs:text-3xl text-center italic break-words"
        style={{ top: '22.214%', bottom: '44.58' }}
      >
        <BubbleText />
      </span>
    </div>
  );
};

export default MichalSpeechBubble;
