import ExpandIcon from 'components/Icons/ExpandIcon';
import MultiSourceImageParse from 'components/common/MultiSourceImageParse';
import useDomParser from 'hooks/useDomParser';
import useModal from 'hooks/useModal';
import truncate from 'lodash.truncate';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArticleContainerStrings as strings } from './ArticleContainer.strings';

const ArticleContainer = ({ item }) => {
  const { toggle } = useModal();
  const [parsedStr] = useDomParser(item.text);

  return (
    <div className="flex flex-col max-w-xs items-center bg-p-brown-light px-9 py-6 rounded-xl">
      <div className="flex flex-col items-start w-full mb-4">
        <h1 className="_text-bold text-3xl leading-none">{item.title}</h1>
        <h2 className="text-p-blue text-base">
          {strings.articleFrom} {item.sourceFrom}
        </h2>
      </div>
      <div
        onClick={toggle}
        className="border-2 border-p-brown relative mb-9 overflow-hidden"
        style={{ cursor: 'zoom-in' }}
      >
        <ExpandIcon onClick={toggle} />
        <MultiSourceImageParse image={item.images} width={300} height={320} />
      </div>

      <div className="_text text-xl">
        <p>{truncate(parsedStr, { length: 250, separator: ' ' })}</p>
      </div>
      <NavLink
        to={`/home/articles/${item._id}`}
        className="_text-bold text-xl bg-p-brown hover:bg-p-brown-dark py-1 px-4 mr-auto mt-5"
      >
        {strings.readMore}
      </NavLink>
    </div>
  );
};

export default ArticleContainer;
