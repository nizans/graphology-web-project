import React from 'react';
import Slider from 'react-slick';

import ExpertiseContainer from 'features/home/components/Expertise/ExpertiseContainer';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style, display: 'block', background: 'red' }} onClick={onClick} />;
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style, display: 'block', background: 'green' }} onClick={onClick} />;
}

const Carousel = ({ data }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    rtl: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Slider {...settings}>
      {data.map((item, i) => {
        <ExpertiseContainer data={item} />;
      })}
    </Slider>
  );
};
export default Carousel;
