import React, { useContext } from 'react';
import TitleUnderline from 'components/UI/TitleUnderline';
import RecommendationsContainer from './RecommendationsContainer';
import { DimensionsContext } from 'context/DimensionsContext';
import ResponsiveSlider from '../../../../components/common/ResponsiveSlider/ResponsiveSlider';
import Slider from 'react-slick';

const strings = {
  title: 'המלצות',
};
const recommendations = [
  {
    text: 'מערכות המלצה הן מערכות מוניטין ומנגנונים שונים המשמשים כדי לסנן כמויות גדולות של מידע באמצעות',
    linkTitle: 'ויקיפדיה',
    link: '#',
  },
  {
    text: 'הפצת תהליך של סינון בקרב קבוצה גדולה של אנשים. המערכות מספקות המלצות למשתמשים על פרטים שעשויים',
    linkTitle: 'ויקיפדיה',
    link: '#',
  },
  {
    text: '.לעניין אותם ההמלצות עוזרות למשתמשים לאתר .פרטים רלוונטים',
    linkTitle: 'ויקיפדיה',
    link: '#',
  },
  {
    text: '.לעניין אותם ההמלצות עוזרות למשתמשים לאתר .פרטים רלוונטים',
    linkTitle: 'ויקיפדיה',
    link: '#',
  },
  {
    text: '.לעניין אותם ההמלצות עוזרות למשתמשים לאתר .פרטים רלוונטים',
    linkTitle: 'ויקיפדיה',
    link: '#',
  },
  {
    text: '.לעניין אותם ההמלצות עוזרות למשתמשים לאתר .פרטים רלוונטים',
    linkTitle: 'ויקיפדיה',
    link: '#',
  },
];

const Recommendations = () => {
  const { windowWidth } = useContext(DimensionsContext);

  return (
    <div className="flex flex-col justify-center">
      <TitleUnderline title={strings.title} />
      {/* {windowWidth < 1024 ? (
        <ResponsiveSlider>
          {recommendations.map((item, i) => (
            <div className="mt-14">
              <RecommendationsContainer data={item} key={i} />
            </div>
          ))}
        </ResponsiveSlider>
      ) : (
        <div className="px-12">
          <Slider {...sliderSettings}>
            {recommendations.map((item, i) => (
              <div className="mt-14">
                <RecommendationsContainer data={item} key={i} />
              </div>
            ))}
          </Slider>
        </div>
      )} */}
      <ResponsiveSlider>
        {recommendations.map((item, i) => (
          <div className="mt-14">
            <RecommendationsContainer data={item} key={i} />
          </div>
        ))}
      </ResponsiveSlider>
    </div>
  );
};

export default Recommendations;
