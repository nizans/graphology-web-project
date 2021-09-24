import React from 'react';

const TitleUnderline = ({ title }) => {
  return (
    <div className="flex flex-col items-center justify-evenly h-full">
      <div className="divide-p-brown divide-y-4 flex flex-col mb-4">
        <h1 className="_text-bold-dark-8xl">{title}</h1>
        <span></span>
      </div>
    </div>
  );
};

export default TitleUnderline;
