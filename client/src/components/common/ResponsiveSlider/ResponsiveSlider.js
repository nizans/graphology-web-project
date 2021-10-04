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
    return (
      <a>
        <span class="dot"></span>
      </a>
    );
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

const ResponsiveSlider = ({ children, verticalOnLargeScreen = false }) => {
  const { windowWidth } = useContext(DimensionsContext);

  if (windowWidth < 768)
    return (
      <div
        style={{
          minWidth: windowWidth * 2,
          marginRight: windowWidth > 475 ? '-66%' : '-57%',
        }}
      >
        <Slider {...mobileSliderSettings}>{children}</Slider>
      </div>
    );

  if (windowWidth < 1024)
    return (
      <div className="px-20">
        <Slider {...singleSliderSettings}>{children}</Slider>
      </div>
    );

  if (verticalOnLargeScreen) return <Slider {...verticalSliderSettings}>{children}</Slider>;

  return <Slider {...threeSliderSettings}>{children}</Slider>;
};

export default ResponsiveSlider;
