import { DimensionsContext } from 'context/DimensionsContext';
import { DownArrow, LeftArrow, RightArrow, UpArrow } from 'components/UI/Arrows';

import React, { useContext } from 'react';
import Slider from 'react-slick';
import './dots.css';

const mobileSliderSettings = {
  dots: true,
  infinite: true,
  arrows: false,
  rtl: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dotsClass: 'slick-dots',
  customPaging: function (i) {
    return <span className="dot"></span>;
  },
};

const singleSliderSettings = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  className: 'center',
  centerMode: true,
  centerPadding: '0',
  nextArrow: <LeftArrow left={-40} />,
  prevArrow: <RightArrow right={-40} />,
  rtl: true,
};

const threeSliderSettings = {
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  className: 'center',
  centerMode: true,
  centerPadding: '-4px',
  nextArrow: <LeftArrow left={-40} />,
  prevArrow: <RightArrow right={-40} />,
  rtl: true,
};

const verticalSliderSettings = {
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  vertical: true,
  verticalSwiping: true,
  nextArrow: <DownArrow />,
  prevArrow: <UpArrow />,
};

const ResponsiveSlider = ({ children, verticalOnLargeScreen = false, withThreeSlider = true }) => {
  const { windowWidth } = useContext(DimensionsContext);

  if (children.length <= 3) {
    mobileSliderSettings.slidesToShow = 1;
  }
  if (windowWidth < 768) {
    return (
      <div
        style={{
          minWidth: windowWidth * 2,
          marginRight: windowWidth > 475 ? '-66%' : '-53%',
          marginBottom: '15px',
        }}
      >
        <Slider {...mobileSliderSettings}>{children}</Slider>
      </div>
    );
  }

  if (windowWidth < 1024 || (!withThreeSlider && !verticalOnLargeScreen))
    return (
      <div className="px-20">
        <Slider {...singleSliderSettings}>{children}</Slider>
      </div>
    );

  if (verticalOnLargeScreen) return <Slider {...verticalSliderSettings}>{children}</Slider>;

  return (
    <div className="px-20">
      <Slider {...threeSliderSettings}>{children}</Slider>
    </div>
  );
};

export default ResponsiveSlider;
