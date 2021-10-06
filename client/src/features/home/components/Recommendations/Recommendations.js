import TitleUnderline from 'components/UI/TitleUnderline';
import React from 'react';
import ResponsiveSlider from '../../../../components/common/ResponsiveSlider/ResponsiveSlider';
import RecommendationsContainer from './RecommendationsContainer';

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
  return (
    <div className="flex flex-col justify-center">
      <TitleUnderline title={strings.title} />
      <ResponsiveSlider>
        {recommendations.map((item, i) => (
          <div className="mt-14" key={Math.random * 100 + i}>
            <RecommendationsContainer data={item} />
          </div>
        ))}
      </ResponsiveSlider>
    </div>
  );
};

export default Recommendations;
