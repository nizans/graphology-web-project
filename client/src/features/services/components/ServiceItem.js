import htmlParserOptions from 'config/htmlParserOptions';
import parse from 'html-react-parser';
import React, { forwardRef } from 'react';

const ServiceItem = forwardRef(({ item }, ref) => {
  const text = parse(item.description, htmlParserOptions);

  return (
    <div ref={ref} className="flex flex-col lg:grid grid-cols-6 py-20  lg:px-10">
      <div className="hidden lg:block col-span-1 m-auto">
        <img loading="eager" src={item.image.full} alt="" />
      </div>
      <div className="col-span-5 lg:px-14 ">
        <div className="flex items-center mb-4 lg:mb-0">
          <h1 className="font-bold text-5xl text-p-blue-dark lg:pb-6 md:text-center lg:text-right">{item.title}</h1>
        </div>
        <img className="w-20 md:w-28 float-right ml-1 lg:hidden" loading="eager" src={item.image.full} alt="" />
        <p className="text-p-blue text-3xl">{text}</p>
      </div>
    </div>
  );
});

export default ServiceItem;
