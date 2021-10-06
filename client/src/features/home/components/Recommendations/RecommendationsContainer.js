import React from 'react';
import QuotesIcon from 'assets/icons/quotes_icon.svg';
const RecommendationsContainer = ({ data }) => {
  return (
    <div
      style={{ height: '50vh' }}
      className="flex relative justify-center items-center bg-p-gray mx-4 sm:m-8 rounded-3xl flex-col py-8 px-4 sm:px-8 lg:p-8"
    >
      <img loading="lazy" src={QuotesIcon} width="120px" alt="" className="absolute -top-14" />
      <div className="h-full overflow-y-hidden">
        <p className=" _text text-2xl sm:text-4xl lg:text-2xl xl:text-4xl 2xl:text-5xl text-right">{data.text}</p>
      </div>
      <a className="_text-bold text-3xl sm:text-4xl mt-auto mr-auto" href={data.link}>
        {data.linkTitle}
      </a>
    </div>
  );
};

export default RecommendationsContainer;
