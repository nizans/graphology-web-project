import React from 'react';
import { ReactComponent as BookSide } from '../../../../assets/icons/book_side.svg';
import BookSideways from '../../../../assets/icons/BookSideways.svg';
import EmptyBook from '../../../../assets/icons/book_side_emprty.svg';

import { useState } from 'react';

const strings = {
  rightPopupText: `'ספר שירים "בקרום הדק" הוצ עקד 2010, זכה בתעודת הוקרה ע"ש דוד לויתן. ספר המשקף עולם .פנימי מורכב וביטוי של עומק רגשי`,
};
const RightSide = () => {
  const [showPopUp, setShowPopUp] = useState('hidden');
  return (
    <div className="flex items-end relative">
      <BookSide
        className="transform transition-all hover:rotate-2 cursor-pointer  w-1/4 h-full sm:w-auto sm:h-auto"
        onMouseEnter={() => setShowPopUp('opacity-1')}
        onMouseLeave={() => {
          setShowPopUp('opacity-0');
          setTimeout(() => setShowPopUp('hidden'), 400);
        }}
      />
      <img loading="lazy" className=" w-1/4 h-full sm:w-auto sm:h-auto" src={EmptyBook} alt="" />
      <img loading="lazy" className=" w-1/4 h-full sm:w-auto sm:h-auto" src={EmptyBook} alt="" />
      <img loading="lazy" className="hidden md:block" src={BookSideways} alt="" />
      <div
        style={{
          pointerEvents: 'none',
          transition: 'opacity .4s',
        }}
        className={`absolute bg-p-brown-dark font-semibold top-1/2 transform -translate-x-14 _text-2xl rounded-3xl w-96 ${showPopUp}`}>
        <p className="p-4">{strings.rightPopupText}</p>
      </div>
    </div>
  );
};

export default RightSide;
