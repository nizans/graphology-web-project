import React from 'react';
import { ReactComponent as BookFront } from '../../../../assets/icons/book_front.svg';
import { useState } from 'react';
import BookSideTall from '../../../../assets/icons/BookSideTall.svg';
const strings = {
  leftPopUp: `ספר מאת מיכל דורון, בו ניתחה ,את כתבי יד של אישויות רבות ספר מרתק החושף צד אנושי .אחר שלא תמיד היה גלוי לעין`,
};
const LeftSide = () => {
  const [showPopUp, setShowPopUp] = useState('hidden');
  return (
    <>
      <div className="flex justify-end items-end">
        <BookFront
          className="transform transition-all hover:rotate-2 cursor-pointer w-2/4 h-full sm:h-auto sm:w-auto"
          onMouseEnter={() => setShowPopUp('opacity-1')}
          onMouseLeave={() => {
            setShowPopUp('opacity-0');
            setTimeout(() => setShowPopUp('hidden'), 400);
          }}
        />
        <img loading="lazy" className="hidden md:block" src={BookSideTall} alt="" />
        <div
          style={{
            pointerEvents: 'none',
            transition: 'opacity .4s',
          }}
          className={`absolute bg-p-brown-dark font-semibold top-1/2 transform translate-x-80 _text-2xl rounded-3xl w-96 ${showPopUp}`}>
          <p className="p-4">{strings.leftPopUp}</p>
        </div>
      </div>
    </>
  );
};

export default LeftSide;
