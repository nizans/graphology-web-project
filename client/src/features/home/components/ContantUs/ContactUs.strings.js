import { PHONE_NUMBER } from 'strings/common';

export const ContactUsStrings = {
  title: 'ייעוץ והכוונה',
  subTitle: `לקבלת מידע נוסף, אשמח לעמוד לשרותכם ${PHONE_NUMBER} או השאירו פרטים ואחזור אליכם בהקדם`,
};

export const SubTitle = () => {
  return (
    <h3 className=" _text _p-size xl:text-center my-6 lg:my-0">
      לקבלת מידע נוסף, אשמח לעמוד לשרותכם{' '}
      <a href={`tel:${PHONE_NUMBER}`}>
        <br />
        <strong>{PHONE_NUMBER}</strong>
        <br />
      </a>
      או השאירו פרטים ואחזור אליכם בהקדם
    </h3>
  );
};
