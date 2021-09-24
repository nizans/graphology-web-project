import React from 'react';
import MichalDrawings from 'assets/icons/michal_drawings.svg';
import ReadMoreBtn from 'components/UI/ReadMoreBtn';
import SpeechBubble from 'assets/icons/speech_bubble.svg';
import Quotes from 'assets/icons/quotes_icon.svg';
import Underline from 'components/UI/Underline';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { SectionHeightContext } from 'context/sectionHeightContext';
const strings = {
  title: 'מיכל דורון',
  text: '.עובדת כעשרים ושבע שנה כמרצה בתחומים ,פסיכולוגים וגרפולוגיה, לימדה במכללות לוינסקיעמק יזרעאל ומכללת שחר. גרפולוגית מוסמכת עובדת עם ארגונים וחברות, מתמחה בייעוץ תעסוקתי ובגרפולוגיה משפטית',
  readMore: 'קרא עוד',
  bubbleText: 'כשם שאין בעולם שתי טביעות אצבע זהות אין בעולם שני כתבי יד זהים',
};

const Michal = React.forwardRef((props, ref) => {
  const { windowHeight, headerHeight } = useContext(SectionHeightContext);
  return (
    <div className="flex flex-col items-center" ref={ref}>
      <div className=" sm:w-1/2 relative transform translate-y-16">
        <img loading="lazy" className="mx-auto" src={SpeechBubble} alt="" />
        <img
          loading="lazy"
          alt=""
          src={Quotes}
          className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
        <h1
          className="absolute left-0 right-0 text-p-brown-light _text-5xl text-center px-16 italic break-words"
          style={{ top: '22.214%', bottom: '44.58' }}>
          {strings.bubbleText}
        </h1>
      </div>
      <div className="grid gap-x-7 sm:grid-cols-2 mt-10 sm:mt-0">
        <div className="flex justify-center">
          <img style={{ maxHeight: windowHeight - headerHeight - 100 + 'px' }} alt="" src={MichalDrawings} />
        </div>
        <div className="flex flex-col px-4">
          <NavLink to="/home/about" className="_text-bold-dark-12xl leading-none hover:text-p-brown ">
            {strings.title}
          </NavLink>
          <Underline style={{ width: '50%' }} />
          <p className="_text-3xl py-6 pl-12 max-w-2xl leading-normal ">{strings.text}</p>
          <ReadMoreBtn to="/home/about" className="text-4xl mr-auto sm:m-0" />
        </div>
      </div>
    </div>
  );
});

export default Michal;
