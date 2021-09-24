import React, { useContext, useEffect, useRef, useState } from 'react';
import Shelf from '../../../../assets/icons/Shelf.svg';
import './bookshelf.css';
import RightSide from './RightSide';
import LeftSide from './LeftSide';
import DownArrow from '../../../../assets/icons/down_arrow.png';
import { SectionHeightContext } from 'context/sectionHeightContext';

const strings = {
  title: 'גרפולוגיה',
  subTitle: 'תורת כתב-יד',
  findMore: 'גלה עוד',
};

const BookShelf = ({ onReadMoreClick }) => {
  const readMoreTextRef = useRef(null);
  const readMoreImgRef = useRef(null);
  const { windowHeight } = useContext(SectionHeightContext);
  const [bookShelfTranlateY, setBookShelfTranlateY] = useState(0);

  const readMoreAnimation = e => {
    if (e.type === 'mouseenter') {
      readMoreTextRef.current.classList.add('translate-y-4');
      readMoreImgRef.current.classList.add(`translate-y-2`);
    }
    if (e.type === 'mouseleave') {
      readMoreTextRef.current.classList.remove('translate-y-4');
      readMoreImgRef.current.classList.remove(`translate-y-2`);
    }
  };

  useEffect(() => {
    if (windowHeight < 740) {
      setBookShelfTranlateY(-110);
    } else {
      setBookShelfTranlateY(0);
    }
  }, [windowHeight]);

  return (
    <div className="my-auto">
      <div className="flex flex-col items-center mb-28 sm:mb-0">
        <h1 className="sm:leading-none _text-bold-dark-12xl text-7xl sm:text-12xl ">{strings.title}</h1>
        <h3 className="sm:leading-7 _text-bold-7xl">{strings.subTitle}</h3>
      </div>
      <div
        className="h-full"
        style={{
          transform: `translateY(${bookShelfTranlateY}px)`,
        }}>
        <div className="flex justify-between items-end relative">
          <RightSide />
          <div
            onClick={onReadMoreClick}
            className=" left-0 right-0 absolute flex flex-col items-center pb-4 cursor-pointer"
            onMouseEnter={readMoreAnimation}
            onMouseLeave={readMoreAnimation}>
            <h1 ref={readMoreTextRef} className="_text-bold-4xl transform transition-all">
              {strings.findMore}
            </h1>
            <img loading="lazy" ref={readMoreImgRef} src={DownArrow} alt="" className="transform transition-all" />
          </div>
          <LeftSide />
        </div>
        <img loading="lazy" src={Shelf} alt="" className="w-full" />
      </div>
    </div>
  );
};

export default BookShelf;
