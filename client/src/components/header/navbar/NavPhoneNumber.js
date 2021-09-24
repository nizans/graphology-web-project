import React from 'react';
import phoneIcon from '../../../assets/icons/phone_icon.svg';

const strings = {
  phoneTitle: 'לייעוץ ואבחון גרפולוגי',
  phoneNumber: '054-9772887',
};
const NavPhoneNumber = () => {
  return (
    <div className="hidden sm:flex flex-row pr-4 lg:flex-col items-start">
      <h1>{strings.phoneTitle}</h1>
      <a className="flex" href={`tel:${strings.phoneNumber}`}>
        <img loading="lazy" src={phoneIcon} className="h-6 lg:h-8 px-4 lg:pr-0 " alt="" />
        {strings.phoneNumber}
      </a>
    </div>
  );
};

export default NavPhoneNumber;
