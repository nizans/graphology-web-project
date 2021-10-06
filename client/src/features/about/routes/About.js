import MichalAboutPhoto from 'assets/imgs/MichalAboutPhoto.svg';
import Section from 'components/common/Section';
import MultiSourceImageParse from 'components/common/MultiSourceImageParse';
import Underline from 'components/UI/Underline';
import { DimensionsContext } from 'context/DimensionsContext';
import { certificationsApiCRUDRequests } from 'features/certification';
import useDimensions from 'hooks/useDimensions';
import { useFetchData } from 'lib/reactQuery';
import React, { useContext, useEffect } from 'react';

const strings = {
  title: 'מיכל דורון',
  subTitle: 'גרפולוגית, סופרת, משוררת ועיתונאית ישראלית',
  certificates: 'תעודות',
  text: `עובדת כ- עשרים ושבע שנה כמרצה בתחומים פסיכולוגיה ,וגרפולוגיה. לימדה במכללות לוינסקי ועמק יזרעאל ומכללת השחר .מוזמנת לימי עיון כנסים, וספריות גרפולוגית מוסמכת , עובדת עם ארגונים וחברות מתמחה בייעוץ תעסוקתי ובגרפולוגיה משפטיתבפילוסופיה, עשתה השלמות בעלת תואר שני בפסיכולוגיה ובעלת תואר שני במדעי ההתנהגות בו חקרה את הקשר בין המתאם הגרפולוגי לבין .האינטליגנציה הרגשית "ספרים שהוציאה: ספר שירים "בקרום הדק שזכה בתעודת הוקרה .ע"ש דוד לויתן, ספרה ספרה 'על ספת הגרפולוג" 2004 הוצ' עקד מתורגם כעת לשפה האנגלית כתבה טורים בנושא גרפולוגיה בידיעות תקשורת ובעיתון מאזנים של אגודת הסופרים`,
};
export const About = () => {
  const { headerHeight, windowHeight, breadCrumbHeight, footerHeight } = useContext(DimensionsContext);

  const { data, isSuccess } = useFetchData(certificationsApiCRUDRequests.read());

  return (
    <>
      <Section minHeight={windowHeight - headerHeight - breadCrumbHeight}>
        <div className="flex flex-col items-center justify-center lg:gap-x-8 lg:grid lg:grid-cols-2">
          <div>
            <img alt="" className=" lg:mr-auto lg:my-auto" src={MichalAboutPhoto} />
          </div>
          <div className=" lg:my-auto">
            <div className="text-center lg:text-right lg:mx-0">
              <h1 className="_title ">{strings.title}</h1>
              <h3 className="_text text-3xl">{strings.subTitle}</h3>
              <Underline className="w-2/3 mx-auto lg:mx-auto my-7" />
            </div>
            <p className="_text _p-size">{strings.text}</p>
          </div>
        </div>
      </Section>

      {isSuccess && (
        <Section
          //TODO - ADD SLIDER INSTEAD for certification
          minHeight={windowHeight - headerHeight - breadCrumbHeight}
          className="flex flex-col justify-evenly my-4"
        >
          <h1 className="text-p-brown-dark font-bold whitespace-nowrap text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            {strings.certificates}
          </h1>
          <div className="grid sm:grid-cols-3 gap-9 my-8">
            {data.payload.map(cert => (
              <div key={cert._id} className="border-p-brown border-2 rounded-lg overflow-hidden">
                <MultiSourceImageParse
                  withModal={true}
                  style={{ objectFit: 'cover' }}
                  height="100%"
                  width="100%"
                  image={cert.images}
                />
              </div>
            ))}
          </div>
        </Section>
      )}
    </>
  );
};
