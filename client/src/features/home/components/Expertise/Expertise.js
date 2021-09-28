import { LeftArrow, RightArrow } from 'components/UI/Arrows';
import { DimensionsContext } from 'context/DimensionsContext';
import { servicesApiCRUDRequests } from 'features/services';
import { useFetchData } from 'lib/reactQuery';
import React, { useContext, useEffect } from 'react';
import Slider from 'react-slick';
import ExpertiseContainer from './ExpertiseContainer';

const strings = {
  title: 'תחומי התמחות',
  subTitle: 'שירותים ואבחונים גרפולוגים',
};

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  className: 'center',
  centerMode: true,
  centerPadding: '-2px',
  nextArrow: <LeftArrow left={-40} />,
  prevArrow: <RightArrow right={-40} />,
};

const Expertise = () => {
  const { data, isSuccess, error } = useFetchData(servicesApiCRUDRequests.read());
  const { windowWidth: width } = useContext(DimensionsContext);

  useEffect(() => {
    if (width < 1024) {
      sliderSettings.slidesToShow = 1;
    }
  }, [width]);

  if (error) return '';
  return (
    isSuccess && (
      <>
        <div className="flex  flex-col w-full items-center ">
          <h1 className="_text-bold-dark-8xl">{strings.title}</h1>
          <h3 className="_text-bold-3xl">{strings.subTitle}</h3>
        </div>
        <div className="px-12 sm:px-44">
          {data.payload.length > 3 ? (
            <Slider {...sliderSettings}>
              {data.payload.map((item, i) => (
                <ExpertiseContainer data={item} key={item._id} />
              ))}
            </Slider>
          ) : (
            <div className="grid grid-cols-3">
              {data.payload.map((item, i) => (
                <ExpertiseContainer data={item} key={item._id} />
              ))}
            </div>
          )}
        </div>
      </>
    )
  );
};

export default Expertise;
