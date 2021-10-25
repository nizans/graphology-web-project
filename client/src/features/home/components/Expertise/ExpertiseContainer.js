import { DimensionsContext } from 'context/DimensionsContext';
import useDomParser from 'hooks/useDomParser';
import truncate from 'lodash.truncate';
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

const titleStrToBtn = str => {
  return 'ל' + str;
};

const ExpertiseContainer = ({ data: item }) => {
  const { windowWidth } = useContext(DimensionsContext);
  const [parsedDescription] = useDomParser(item.description, 'text/html');
  return (
    <div
      className="md:p-8 border-p-brown lg:border-r-4 grid grid-rows-3 sm:grid-rows-6 items-center mx-auto"
      style={{
        width: windowWidth < 640 ? windowWidth * 0.7 : null,
      }}
    >
      <div className="w-full h-full sm:row-span-2">
        <div
          className="m-auto lg:w-full"
          style={{
            maxWidth: windowWidth < 640 ? windowWidth / 2 : 216,
          }}
        >
          <img alt="" loading="eager" src={item.image.full} className="max-h-32 xs:max-h-40  lg:max-h-full m-auto" />
        </div>
      </div>
      <div className="text-center lg:text-right sm:row-span-3 overflow-hidden">
        <h1 className="px-10 lg:px-0 _text-bold text-2xl sm:text-3xl md:text-4xl lg:text-right lg:text-3xl whitespace-nowrap my-2">
          {item.title}
        </h1>
        <p
          className="px-10 lg:px-0 text-center sm:text-right _max-lines-5 sm:_max-lines-none _text text-xl sm:text-xl md:text-2xl  "
          style={{ direction: 'rtl' }}
        >
          {truncate(parsedDescription, {
            length: 100,
            separator: ' ',
          })}
        </p>
      </div>
      <div className=" mx-auto lg:ml-auto lg:mr-0 sm:row-span-1 ">
        <NavLink
          to={`/home/services?scroll=${item.title}`}
          className=" bg-p-brown py-2 px-4 _text-bold text-xl hover:bg-p-brown-dark "
        >
          {titleStrToBtn(item.title)}
        </NavLink>
      </div>
    </div>
  );
};

export default ExpertiseContainer;
