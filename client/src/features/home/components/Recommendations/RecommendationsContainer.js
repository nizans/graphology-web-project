import React from 'react';
import QuotesIcon from 'assets/icons/quotes_icon.svg';
const RecommendationsContainer = ({ data }) => {
  return (
    <div className="flex relative justify-center bg-p-gray mx-4 sm:m-8 rounded-3xl">
      <img loading="lazy" src={QuotesIcon} width="120px" alt="" className="absolute -top-14" />
      <p className="py-16 px-4 sm:px-8 lg:p-16 _text text-xl sm:text-4xl">{data.text}</p>
      <a className="absolute bottom-5 left-8  _text-bold text-4xl" href={data.link}>
        {data.linkTitle}
      </a>
    </div>
  );
};

export default RecommendationsContainer;
