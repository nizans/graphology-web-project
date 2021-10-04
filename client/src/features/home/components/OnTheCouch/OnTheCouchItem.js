import React from 'react';
import ReadMoreBtn from 'components/UI/ReadMoreBtn';
import { useRouteMatch } from 'react-router';
import TableItemImage from 'components/UI/TableItemImage';
import { toDate } from 'utils/toDate';
import useDomParser from 'hooks/useDomParser';
import truncate from 'lodash.truncate';

const OnTheCouchItem = ({ data: item }) => {
  const { path } = useRouteMatch();
  const { publishDate, title, images, _id, text } = item;

  const date = toDate(publishDate);
  const [parsedText] = useDomParser(text);
  return (
    <div className="flex flex-col lg:flex-row w-full justify-evenly items-center">
      <TableItemImage image={images} style={{ objectFit: 'cover' }} />
      <div className="flex flex-col px-4 lg:px-0 justify-start _text text-2xl">
        <div className="my-4 sm:my-0">
          <h1 className="_text-bold text-3xl ">{title}</h1>
          <h3 className="_text text-xl">{date}</h3>
        </div>

        <p className="_text _max-lines-5 _p-size text-sm sm:text-2xl max-w-sm break-words">
          {truncate(parsedText, { separator: ' ', length: 400 })}
        </p>
        <ReadMoreBtn to={`${path}/couch/${_id}`} />
      </div>
    </div>
  );
};

export default OnTheCouchItem;
