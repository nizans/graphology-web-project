import BookFrontPNG from 'assets/icons/bookFrontPng.png';
import BookSideTall from 'assets/icons/BookSideTall.svg';
import { ReactComponent as BookFront } from 'assets/icons/book_front.svg';
import { DimensionsContext } from 'context/DimensionsContext';
import React, { useContext, useState } from 'react';
const strings = {
  leftPopUp: `ספר מאת מיכל דורון, בו ניתחה ,את כתבי יד של אישויות רבות ספר מרתק החושף צד אנושי .אחר שלא תמיד היה גלוי לעין`,
};
const LeftSide = () => {
  const { windowWidth } = useContext(DimensionsContext);
  const [showPopUp, setShowPopUp] = useState('hidden');
  return (
    <>
      <div className="flex justify-end items-end">
        {windowWidth >= 768 ? (
          <BookFront
            className="transform transition-all hover:rotate-2 cursor-pointer h-52 sm:max-h-full sm:h-auto sm:w-auto"
            onMouseEnter={() => setShowPopUp('opacity-1')}
            onMouseLeave={() => {
              setShowPopUp('opacity-0');
              setTimeout(() => setShowPopUp('hidden'), 400);
            }}
          />
        ) : (
          <img src={BookFrontPNG} alt="" className="h-52 sm:h-64" />
        )}
        <img loading="lazy" className="h-64 sm:h-80 md:block" src={BookSideTall} alt="" />
        {windowWidth >= 640 && (
          <div
            style={{
              pointerEvents: 'none',
              transition: 'opacity .4s',
            }}
            className={`absolute bg-p-brown-dark font-semibold top-1/2 transform translate-x-80 _text text-2xl rounded-3xl w-96 ${showPopUp}`}
          >
            <p className="p-4">{strings.leftPopUp}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default LeftSide;
