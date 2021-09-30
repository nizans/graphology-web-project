import useDomParser from 'hooks/useDomParser';
import truncate from 'lodash.truncate';
import React from 'react';
import { NavLink } from 'react-router-dom';

const titleStrToBtn = str => {
  return 'ל' + str;
};
const ExpertiseContainer = ({ data: item }) => {
  const [parsedDescription] = useDomParser(item.description, 'text/html');
  return (
    <div
      className="md:p-8 border-p-brown border-r-4  "
      style={{
        display: 'grid',
        gridTemplateRows: '7',
        gridAutoRows: '1fr',
        gap: '20px',
      }}>
      <div className="row-span-3 max-h-52">
        <img
          alt=""
          className="mx-auto"
          loading="eager"
          style={{ objectFit: 'cover', height: '200px' }}
          src={item.image.full}
        />
      </div>
      <h1 className="row-span-1  text-4xl _text-bold-4xl mt-6 ml-auto">{item.title}</h1>
      <p className="row-span-2 _text-xl " style={{ direction: 'rtl' }}>
        {truncate(parsedDescription, { length: 150, separator: ' ' })}
      </p>
      <NavLink
        to={`/home/services?scroll=${item.title}`}
        className="row-span-1 bg-p-brown py-2 px-4 mx-auto lg:mr-0 lg:ml-auto  mt-4 _text-bold-xl hover:bg-p-brown-dark">
        {titleStrToBtn(item.title)}
      </NavLink>
    </div>
  );
};

export default ExpertiseContainer;
