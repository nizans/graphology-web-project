import React from 'react';

const ServicesNavMenu = ({ onItemClick, data }) => {
  return (
    <div className="grid  md:grid-cols-3 w-2/3 my-4">
      {data &&
        data.map((item, i) => (
          <button
            key={item._id + item.title}
            onClick={() => onItemClick(i)}
            className="text-p-blue text-3xl underline py-4 text-right">
            {item.title}
          </button>
        ))}
    </div>
  );
};

export default ServicesNavMenu;
