import BlurredUpImage from 'components/UI/BlurredUpImage';
import ExpandIcon from 'components/UI/ExpandIcon';
import useDomParser from 'hooks/useDomParser';
import useModal from 'hooks/useModal';
import  truncate from 'lodash.truncate';
import React from 'react';
import { NavLink } from 'react-router-dom';

const strings = {
  readMore: 'להמשך קריאה',
  articleFrom: 'כתבה מתוך: ',
};
const ArticleContainer = ({ item }) => {
  const imgSrc = (item.images[0] && item.images[0] && { full: item.images[0].full, thumb: item.images[0].thumb }) || {
    full: 'https://via.placeholder.com/150',
    thumb: 'https://via.placeholder.com/150',
  };
  const { toggle } = useModal();
  const [parsedStr] = useDomParser(item.text);
  return (
    <div className="flex flex-col max-w-xs items-center bg-p-brown-light px-9 py-6 rounded-xl">
      <div className="flex flex-col items-start w-full mb-4">
        <h1 className="_text-bold-3xl leading-none">{item.title}</h1>
        <h2 className="text-p-blue text-base">
          {strings.articleFrom} {item.sourceFrom}
        </h2>
      </div>
      <div
        onClick={toggle}
        className="border-2 border-p-brown relative mb-9 overflow-hidden"
        style={{ cursor: 'zoom-in' }}>
        <ExpandIcon onClick={toggle} />
        <BlurredUpImage
          width={300}
          height={320}
          imageSrc={imgSrc.full}
          tinySrc={imgSrc.thumb}
          style={{ objectFit: 'cover' }}
        />
      </div>

      <div className="_text-xl">
        <p>{truncate(parsedStr, { length: 250, separator: ' ' })}</p>
      </div>
      <NavLink
        to={`/home/articles/${item._id}`}
        className="_text-bold-xl bg-p-brown hover:bg-p-brown-dark py-1 px-4 mr-auto mt-5">
        {strings.readMore}
      </NavLink>
    </div>
  );
};

export default ArticleContainer;
