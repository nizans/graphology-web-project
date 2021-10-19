import React from 'react';
import { ContactUsStrings as strings, SubTitle } from './ContactUs.strings';
import ContantUsForm from './ContantUsForm';

const ContactUs = () => {
  return (
    <div
      className=" bg-p-gray rounded-2xl flex flex-col items-start mx-auto justify-center lg:items-center w-3/4 px-8 sm:px-10 lg:px-60 lg:w-full lg:p-0 "
      style={{
        boxShadow: '15px 25px 0px 5px #FFFBF7, 15px 25px 0px 8px #DFBBA6',
      }}
    >
      <h1 className="_title mt-12 lg:pt-6">{strings.title}</h1>
      <SubTitle />
      <ContantUsForm />
    </div>
  );
};

export default ContactUs;
