import React from 'react';
import ContantUsForm from './ContantUsForm';

const strings = {
  title: 'ייעוץ והכוונה',
  subTitle: 'לקבלת מידע נוסף, אשמח לעמוד לשרותכם 054-8950837 או השאירו פרטים ואחזור אליכם בהקדם',
};

const ContactUs = () => {
  return (
    <div
      className="w-full bg-p-gray rounded-2xl flex flex-col items-center"
      style={{
        boxShadow: '15px 25px 0px 5px #FFFBF7, 15px 25px 0px 8px #DFBBA6',
        
      }}>
      <h1 className="_text-bold-dark-8xl pt-6">{strings.title}</h1>
      <h3 className="px-60 _text-3xl text-center">{strings.subTitle}</h3>
      <ContantUsForm />
    </div>
  );
};

export default ContactUs;
