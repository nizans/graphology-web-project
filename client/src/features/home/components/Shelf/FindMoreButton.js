import React, { useRef } from 'react';
import DownArrow from 'assets/icons/down_arrow.png';
import { HEB_FIND_MORE } from 'strings/common';

const FindMoreButton = ({ onClick }) => {
  const readMoreTextRef = useRef(null);
  const readMoreImgRef = useRef(null);
  const readMoreAnimation = e => {
    if (e.type === 'touchstart') {
      readMoreTextRef.current.classList.add('translate-y-4');
      readMoreImgRef.current.classList.add(`translate-y-2`);
    }
    if (e.type === 'touchend') {
      readMoreTextRef.current.classList.remove('translate-y-4');
      readMoreImgRef.current.classList.remove(`translate-y-2`);
    }
    if (e.type === 'mouseenter') {
      readMoreTextRef.current.classList.add('translate-y-4');
      readMoreImgRef.current.classList.add(`translate-y-2`);
    }
    if (e.type === 'mouseleave') {
      readMoreTextRef.current.classList.remove('translate-y-4');
      readMoreImgRef.current.classList.remove(`translate-y-2`);
    }
  };

  return (
    <div onClick={onClick} className="left-0 right-0 sm:absolute flex flex-col items-center pb-4 ">
      <div
        className="flex flex-col items-center cursor-pointer"
        onTouchStart={readMoreAnimation}
        onTouchEnd={readMoreAnimation}
        onMouseEnter={readMoreAnimation}
        onMouseLeave={readMoreAnimation}
      >
        <h1 ref={readMoreTextRef} className="_text text-4xl transform transition-all">
          {HEB_FIND_MORE}
        </h1>
        <img
          loading="eager"
          width="50"
          ref={readMoreImgRef}
          src={DownArrow}
          alt=""
          className="transform transition-all"
        />
      </div>
    </div>
  );
};

export default FindMoreButton;
