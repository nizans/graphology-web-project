import ReadMoreBtn from 'components/UI/ReadMoreBtn';
import MultiSourceImageParse from 'components/common/MultiSourceImageParse';
import { DimensionsContext } from 'context/DimensionsContext';
import useDimensions from 'hooks/useDimensions';
import useDomParser from 'hooks/useDomParser';
import truncate from 'lodash.truncate';
import React, { useContext } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { toDate } from 'utils/toDate';

const CouchItem = ({ data: item }) => {
  const { path } = useRouteMatch();
  const [parsedText] = useDomParser(item.text, 'text/html');
  const { windowWidth } = useContext(DimensionsContext);
  const [ref, dim] = useDimensions();

  return (
    <div className="grid py-14 grid-cols-8 gap-x-2 lg:gap-x-8 ">
      <div className="col-span-3 lg:col-span-2 flex justify-center items-center ">
        <MultiSourceImageParse height={dim?.height} image={item.images} />
      </div>
      <div className="col-span-4 lg:col-span-5" ref={ref}>
        <h1 className="_text-bold text-4xl">{item.title}</h1>
        <h3 className="_text text-xl pb-3">{toDate(item.publishDate || item.uploadDate)}</h3>
        <p
          style={{
            columnCount: windowWidth < 1024 ? '1' : '2',
          }}
          className="align-middle _p-size _text _max-lines-3 lg:_max-lines-none w-full"
        >
          {truncate(parsedText, { length: 500, separator: ' ' })}
        </p>
      </div>
      <div className="col-span-1 col-start-8 mt-auto mr-auto">
        <ReadMoreBtn to={`${path}/${item._id}`} asArrow={windowWidth < 1024} />
      </div>
    </div>
  );
};

export default CouchItem;
