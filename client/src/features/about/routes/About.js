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
  const [ref, dim] = useDimensions();
  const { data, isSuccess } = useFetchData(certificationsApiCRUDRequests.read());

  return (
    <>
      <Section minHeight={windowHeight - headerHeight - breadCrumbHeight}>
        <div className="grid gap-x-12 sm:grid-cols-2">
          <div>
            <img ref={ref} alt="" className="mr-auto" src={MichalAboutPhoto} />
          </div>
          <div className="my-auto " style={{ maxWidth: dim?.width }}>
            <div>
              <h1 className="_title">{strings.title}</h1>
              <h3 className="_text text-3xl mb-4">{strings.subTitle}</h3>
            </div>
            <Underline className="w-2/3 my-7" />
            <p className="pt-4 _text text-2xl">{strings.text}</p>
          </div>
        </div>
      </Section>

      {isSuccess && (
        <Section
          //TODO - ADD SLIDER INSTEAD
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
