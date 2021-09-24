import { LeftArrow, RightArrow } from 'components/UI/Arrows';
import { servicesApiCRUDRequests } from 'features/services';
import useWindowDimensions from 'hooks/useWindowDimensions';
import { useFetchData } from 'lib/reactQuery';
import React, { useEffect } from 'react';
import Slider from 'react-slick';
import { useState } from 'react/cjs/react.development';
import BriefCase from '../../../../assets/icons/experise_breifcase.svg';
import OpenBook from '../../../../assets/icons/experise_openbook.svg';
import Speech from '../../../../assets/icons/expertise_speech.svg';
import ExpertiseContainer from './ExpertiseContainer';

const strings = {
  title: 'תחומי התמחות',
  subTitle: 'שירותים ואבחונים גרפולוגים',
};

const fallbackData = [
  {
    title: 'קורסים וסדנאות',
    text: 'קורס הוא בדרך כלל תנאי. לקידומו של החייל לתפקיד מסוים. מוסדות להכשרה מקצועית גופים למתן קורס ספציפי, לעיתים כזה המהווה תנאי לקבלת רישיון מסוים במתנ"סים ומרכזי למידה',
    button: 'לקורסים',
    icon: OpenBook,
  },
  {
    title: 'הרצאות',
    text: 'הרצאה היא הצגה מילולית שנועדה להעביר מידע, או ללמד נושא מסוים; למשל, על ידי מרצה באוניברסיטה הרצאות משמשות להעברת מידע על נושא מסוים, כדוגמת היסטוריה',
    button: 'להרצאות',
    icon: Speech,
  },
  {
    title: 'ייעוץ תעסוקתי',
    text: 'תוכניות לעידוד תעסוקה הן תוכניות שמטרתן לסייע לבלתי מועסקים (הן למובטלים והן לפרטים המצויים מחוץ לכוח העבודה) להיקלט בשוק העבודה לעיתים המדינה',
    button: 'לייעוץ תעסוקתי',
    icon: BriefCase,
  },
];

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
  const { data } = useFetchData(servicesApiCRUDRequests.read());
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (width < 1024) {
      sliderSettings.slidesToShow = 1;
    }
  }, [width]);

  return (
    <>
      <div className="flex  flex-col w-full items-center ">
        <h1 className="_text-bold-dark-8xl">{strings.title}</h1>
        <h3 className="_text-bold-3xl">{strings.subTitle}</h3>
      </div>
      <div className="px-12 sm:px-44">
        {data && data.payload && (
          <Slider {...sliderSettings}>
            {data.payload.map((item, i) => (
              <ExpertiseContainer data={item} key={item._id} />
            ))}
          </Slider>
        )}
        {!data && (
          <Slider {...sliderSettings}>
            {fallbackData.map((item, i) => (
              <ExpertiseContainer data={item} key={i} />
            ))}
          </Slider>
        )}
      </div>
    </>
  );
};

export default Expertise;
