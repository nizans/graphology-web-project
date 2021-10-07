import { BreadCrumbsTitleContext } from 'context/BreadCrumbsTitleContext';
import { DimensionsContext } from 'context/DimensionsContext';
import useDimensions from 'hooks/useDimensions';
import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import {
  HEB_ABOUT,
  HEB_ARTICLES,
  HEB_BOOKS,
  HEB_CONTACT,
  HEB_HOMEPAGE,
  HEB_ON_THE_COUCH,
  HEB_GRAPHOLOGY_SERVICE,
  HEB_VIDEOS,
} from 'strings/common';

const BreadCrumbs = () => {
  const [breadCrumbRef, breadCrumbDimension] = useDimensions();
  const { setBreadCrumbHeight, windowWidth } = useContext(DimensionsContext);

  useEffect(() => {
    if (breadCrumbDimension) setBreadCrumbHeight(breadCrumbDimension.height);
  }, [breadCrumbDimension]); // eslint-disable-line react-hooks/exhaustive-deps

  const { id, title } = useContext(BreadCrumbsTitleContext);

  const translate = {
    home: HEB_HOMEPAGE,
    couch: HEB_ON_THE_COUCH,
    books: HEB_BOOKS,
    services: HEB_GRAPHOLOGY_SERVICE,
    contact: HEB_CONTACT,
    about: HEB_ABOUT,
    articles: HEB_ARTICLES,
    videos: HEB_VIDEOS,
  };

  const { pathname } = useLocation();
  const crumbs = pathname.split('/').slice(1);

  if (crumbs.includes(id)) {
    translate[id] = title;
  }

  if (windowWidth < 640) return null;
  return (
    <div ref={breadCrumbRef} className="w-full">
      {crumbs.map((crumb, i) => (
        <span className="_text text-2xl" key={crumb}>
          <NavLink
            className={`pl-2 ${i === crumbs.length - 1 ? 'font-bold' : ''}`}
            to={`/${crumbs.slice(0, i + 1).join('/')}`}
          >
            {translate[crumb]}
          </NavLink>
          {i < crumbs.length - 1 && <span className="pl-2">&gt;</span>}
        </span>
      ))}
    </div>
  );
};

export default BreadCrumbs;
