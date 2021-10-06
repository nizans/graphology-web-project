import BookSideways from 'assets/icons/BookSideways.svg';
import BookSideOrig, { ReactComponent as BookSide } from 'assets/icons/book_side.svg';
import EmptyBook from 'assets/icons/book_side_emprty.svg';
import { DimensionsContext } from 'context/DimensionsContext';
import React, { useContext, useState } from 'react';

const strings = {
  rightPopupText: `'ספר שירים "בקרום הדק" הוצ עקד 2010, זכה בתעודת הוקרה ע"ש דוד לויתן. ספר המשקף עולם .פנימי מורכב וביטוי של עומק רגשי`,
};

const RightSide = () => {
  const { windowWidth } = useContext(DimensionsContext);
  const [showPopUp, setShowPopUp] = useState('hidden');
  return (
    <div className="flex items-end relative">
      {windowWidth >= 768 ? (
        <BookSide
          className="transform transition-all self-end hover:rotate-2 cursor-pointer"
          onMouseEnter={() => setShowPopUp('opacity-1')}
          onMouseLeave={() => {
            setShowPopUp('opacity-0');
            setTimeout(() => setShowPopUp('hidden'), 400);
          }}
        />
      ) : (
        <img loading="eager" src={BookSideOrig} className="h-64 sm:h-80" alt="" />
      )}
      <img loading="eager" className="h-52 md:h-64  lg:h-auto" src={EmptyBook} alt="" />
      {windowWidth >= 768 && <img loading="eager" src={EmptyBook} alt="" />}
      <img
        loading="eager"
        className="h-52 md:h-64 lg:h-auto lg:rotate-0"
        src={BookSideways}
        alt=""
        style={{
          transform: windowWidth < 640 && 'rotate(-15deg) translateX(26px) translateY(5px)',
        }}
      />
      <div
        style={{
          pointerEvents: 'none',
          transition: 'opacity .4s',
        }}
        className={`absolute bg-p-brown-dark font-semibold top-1/2 transform -translate-x-14 _text text-2xl rounded-3xl w-96 ${showPopUp}`}
      >
        <p className="p-4">{strings.rightPopupText}</p>
      </div>
    </div>
  );
};

export default RightSide;
