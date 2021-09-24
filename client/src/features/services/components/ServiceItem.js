import useDomParser from 'hooks/useDomParser';
import React, { forwardRef } from 'react';

const ServiceItem = forwardRef(({ item }, ref) => {
  const [parsedDescription] = useDomParser(item.description, 'text/html');

  return (
    <div ref={ref} className="flex flex-col lg:grid grid-cols-6 py-20 px-10">
      <div className="col-span-1 m-auto">
        <img loading="lazy" src={'../images/' + item.image} alt="" />
      </div>
      <div className="col-span-5 lg:px-14 ">
        <h1 className="font-bold text-5xl text-p-blue-dark pb-6 text-center lg:text-right">{item.title}</h1>
        <p className="text-p-blue text-3xl">{parsedDescription}</p>
      </div>
    </div>
  );
});

export default ServiceItem;
