import Shelf from 'assets/icons/Shelf.svg';
import { DimensionsContext } from 'context/DimensionsContext';
import React, { useContext, useEffect, useState } from 'react';
import './bookshelf.css';
import FindMoreButton from './FindMoreButton';
import LeftSide from './LeftSide';
import RightSide from './RightSide';

const strings = {
  title: 'גרפולוגיה',
  subTitle: 'תורת כתב-יד',
};

const BookShelf = ({ onReadMoreClick }) => {
  const { windowHeight, windowWidth, headerHeight } = useContext(DimensionsContext);
  const [bookShelfTranlateY, setBookShelfTranlateY] = useState(0);

  //   useEffect(() => {
  //     if (windowHeight < 740) {
  //       setBookShelfTranlateY(-110);
  //     } else {
  //       setBookShelfTranlateY(0);
  //     }
  //   }, [windowHeight]);

  return (
    <div className="flex flex-col justify-between" style={{ maxHeight: windowHeight - headerHeight }}>
      <div className=" text-center sm:mb-0">
        <h1 className="sm:leading-none _text-bold-dark text-7xl sm:text-10xl md:text-12xl">{strings.title}</h1>
        <h3 className="sm:leading-7 _text text-5xl sm:text-7xl">{strings.subTitle}</h3>
      </div>
      <div>
        <div className="flex justify-between items-end relative">
          <RightSide />
          {windowWidth >= 640 && <FindMoreButton onClick={onReadMoreClick} />}
          <LeftSide />
        </div>
        <img loading="eager" src={Shelf} alt="" className="w-full" />
      </div>

      <div>{windowWidth < 640 && <FindMoreButton onClick={onReadMoreClick} />}</div>
    </div>
  );
};

export default BookShelf;
