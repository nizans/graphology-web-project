import useDomParser from 'hooks/useDomParser';
import React, { forwardRef } from 'react';

const ServiceItem = forwardRef(({ item }, ref) => {
  const [parsedDescription] = useDomParser(item.description, 'text/html');

  return (
    <div ref={ref} className="flex flex-col lg:grid grid-cols-6 py-20 px-10">
      <div className="hidden lg:block col-span-1 m-auto">
        <img loading="eager" src={item.image.full} alt="" />
      </div>
      <div className="col-span-5 lg:px-14 ">
        <div className="flex items-center mb-4 lg:mb-0">
          <div className=" lg:hidden col-span-1 ml-2 md:ml-4">
            <img className="w-20 md:w-28" loading="eager" src={item.image.full} alt="" />
          </div>
          <h1 className="font-bold text-5xl text-p-blue-dark lg:pb-6 md:text-center lg:text-right">{item.title}</h1>
        </div>
        <p className="text-p-blue text-3xl">{parsedDescription}</p>
      </div>
    </div>
  );
});

export default ServiceItem;
