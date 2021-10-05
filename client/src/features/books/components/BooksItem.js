import ImageBox from 'components/common/ImageBox';
import Section from 'components/common/Section';
import { DimensionsContext } from 'context/DimensionsContext';
import parse from 'html-react-parser';
import React, { useContext } from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
const strings = {
  orderBook: 'הזמנת ספר',
  from: 'מאת',
};

const BooksItem = ({ data: item }) => {
  const { path } = useRouteMatch();
  const { images, title, _id } = item;
  const author = strings.from + ' ' + item.author;
  const description = parse(item.description);
  const {
    windowHeight,
    windowWidth: width,
    headerHeight,
    footerHeight,
    breadCrumbHeight,
  } = useContext(DimensionsContext);

  return (
    <Section minHeight={windowHeight - headerHeight - footerHeight} className="my-8">
      <div className="grid gap-x-7 grid-cols-1 lg:grid-cols-2">
        <ImageBox
          withModal={false}
          height={width < 1024 ? 300 : windowHeight - headerHeight - footerHeight - breadCrumbHeight}
          images={images}
        />

        <div className="w-full flex flex-col justify-evenly items-center lg:items-start p-0 mb-6">
          <div>
            <h1 className="_text-bold-dark text-6xl">{title}</h1>
            <h3 className="_text text-4xl">{author}</h3>
            <p className="_text text-3xl leading mt-4">{description}</p>
          </div>

          <NavLink style={{ width: 'fit-content' }} className="button mx-0 lg:mx-0 mt-6" to={`${path}/${_id}`}>
            {strings.orderBook}
          </NavLink>
        </div>
      </div>
    </Section>
  );
};

export default BooksItem;
