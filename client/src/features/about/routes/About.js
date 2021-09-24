import React, { useContext } from 'react';
import Section from 'components/common/Section';
import MichalAboutPhoto from 'assets/imgs/MichalAboutPhoto.svg';
import { SectionHeightContext } from 'context/sectionHeightContext';
import Underline from 'components/UI/Underline';

const strings = {
  title: 'מיכל דורון',
  subTitle: 'גרפולוגית, סופרת, משוררת ועיתונאית ישראלית',
  certificates: 'תעודות',
  text: `עובדת כ- עשרים ושבע שנה כמרצה בתחומים פסיכולוגיה ,וגרפולוגיה. לימדה במכללות לוינסקי ועמק יזרעאל ומכללת השחר .מוזמנת לימי עיון כנסים, וספריות גרפולוגית מוסמכת , עובדת עם ארגונים וחברות מתמחה בייעוץ תעסוקתי ובגרפולוגיה משפטיתבפילוסופיה, עשתה השלמות בעלת תואר שני בפסיכולוגיה ובעלת תואר שני במדעי ההתנהגות בו חקרה את הקשר בין המתאם הגרפולוגי לבין .האינטליגנציה הרגשית "ספרים שהוציאה: ספר שירים "בקרום הדק שזכה בתעודת הוקרה .ע"ש דוד לויתן, ספרה ספרה 'על ספת הגרפולוג" 2004 הוצ' עקד מתורגם כעת לשפה האנגלית כתבה טורים בנושא גרפולוגיה בידיעות תקשורת ובעיתון מאזנים של אגודת הסופרים`,
};
export const About = () => {
  const { headerHeight, windowHeight, breadCrumbHeight, footerHeight } = useContext(SectionHeightContext);
  return (
    <>
      <Section minHeight={windowHeight - headerHeight - breadCrumbHeight}>
        <div className="grid gap-x-7 sm:grid-cols-2">
          <img alt="" className="w-3/4 m-auto sm:w-auto" src={MichalAboutPhoto} />
          <div className="flex flex-col justify-evenly flex-grow h-full m-0 pt-16">
            <div>
              <h1 className="_text-bold-dark-8xl leading-none">{strings.title}</h1>
              <h3 className="_text-bold-3xl leading-none pb-4">{strings.subTitle}</h3>
            </div>

            <Underline className="w2/3" />
            <p className="pt-4 _text-2xl">{strings.text}</p>
          </div>
        </div>
      </Section>

      <Section className="flex flex-col justify-evenly mb-4" minHeight={windowHeight - headerHeight - footerHeight}>
        <h2 className="text-p-brown-dark _text-bold-8xl ">{strings.certificates}</h2>
        <div className="grid sm:grid-cols-3 gap-9">
          <img
            loading="lazy"
            alt=""
            src="https://via.placeholder.com/418x518.png"
            className="px-8 sm:px-0 object-contain"
          />
          <img
            loading="lazy"
            alt=""
            src="https://via.placeholder.com/418x518.png"
            className="px-8 sm:px-0 object-contain"
          />
          <img
            loading="lazy"
            alt=""
            src="https://via.placeholder.com/418x518.png"
            className="px-8 sm:px-0 object-contain"
          />
        </div>
      </Section>
    </>
  );
};
