import React, { useRef } from 'react';
import PlayOutline from '../../../../assets/icons/play_border.png';
import PlayFilled from '../../../../assets/icons/play_filled.png';

const VideoThumbnail = ({ data, onClick }) => {
  const playOutlineRef = useRef(null);
  const playFilledRef = useRef(null);
  const overlayRef = useRef(null);
  const handleHover = e => {
    if (e.type === 'mouseenter') {
      playFilledRef.current.style.opacity = '1';
      overlayRef.current.style.opacity = '0';
    } else {
      playFilledRef.current.style.opacity = '0';
      overlayRef.current.style.opacity = '0.7';
    }
  };

  const handleClick = () => {
    onClick(data);
  };

  const playButton = (
    <>
      <img
        loading="lazy"
        alt=""
        ref={playOutlineRef}
        src={PlayOutline}
        className="absolute top-1/2 left-1/2"
        style={{
          transform: 'translate(-50%, -50%)',
        }}
      />
      <img
        loading="lazy"
        alt=""
        ref={playFilledRef}
        src={PlayFilled}
        className="absolute top-1/2 left-1/2 transition-all opacity-0 duration-200"
        style={{
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  );

  return (
    <div
      className=" my-4 relative cursor-pointer bg-p-brown-dark sm:w-full bg-center bg-cover rounded-lg border-p-brown border-r-2 overflow-hidden "
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      onClick={handleClick}
      style={{
        paddingTop: '56.25%',
        backgroundImage: `url(${data.thumbnail})`,
      }}>
      <div
        ref={overlayRef}
        className="transition-all absolute top-0 bottom-0 right-0 left-0 bg-black opacity-70 "></div>
      <h5 className="absolute top-0 ml-1 text-p-brown-light">{data.title}</h5>
      {playButton}
      <h5 className="absolute right-1 bottom-0 text-sm text-p-brown">{data.date}</h5>
    </div>
  );
};

export default VideoThumbnail;
