import React from 'react';
import ReadMoreBtn from 'components/UI/ReadMoreBtn';
import { useRouteMatch } from 'react-router';
import MultiSourceImageParse from 'components/common/MultiSourceImageParse';
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
      <div className="relative w-80 h-80">
        {images.length > 1 && (
          <div className="absolute -right-14 bottom-0 transform rotate-3">
            <MultiSourceImageParse
              style={{ margin: 0, boxShadow: '5px 10px 15px #00000040', borderRadius: '5px' }}
              image={images[1]}
              width="250px"
              height="250px"
            />
          </div>
        )}
        <div className="absolute top-0 left-0 right-0 bottom-0 ">
          <MultiSourceImageParse
            style={{ margin: 0, boxShadow: '5px 10px 15px #00000040', borderRadius: '5px' }}
            image={images}
            width="100%"
            height="280px"
          />
        </div>
      </div>
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
