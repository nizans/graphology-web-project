import React from 'react';
import TitleUnderline from 'components/UI/TitleUnderline';
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
];

const Recommendations = () => {
  return (
    <>
      <TitleUnderline title={strings.title} />
      <div className="grid sm:grid-cols-3 mt-6">
        {recommendations.map((item, i) => (
          <RecommendationsContainer data={item} key={i} />
        ))}
      </div>
    </>
  );
};

export default Recommendations;
