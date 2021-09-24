import { BreadCrumbsTitleContext } from 'context/breadCrumbsTitleContext';
import { SectionHeightContext } from 'context/sectionHeightContext';
import useDimensions from 'hooks/useDimensions';
import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';

const BreadCrumbs = () => {
  const [breadCrumbRef, breadCrumbDimension] = useDimensions();
  const { setBreadCrumbHeight } = useContext(SectionHeightContext);
  useEffect(() => {
    if (breadCrumbDimension) setBreadCrumbHeight(breadCrumbDimension.height);
  }, [breadCrumbDimension]);

  const breadCrumbsTitleCTX = useContext(BreadCrumbsTitleContext);
  const translate = {
    home: 'דף בית',
    couch: 'על ספת הגרפולוג',
    books: 'ספרים',
    services: 'שירות גרפולוגי',
    contact: 'צור קשר',
    about: 'אודות',
    articles: 'כתבות',
    videos: 'סרטונים',
  };
  const { pathname } = useLocation();
  const crumbs = pathname.split('/').slice(1);

  if (crumbs.includes(breadCrumbsTitleCTX.id)) {
    translate[breadCrumbsTitleCTX.id] = breadCrumbsTitleCTX.title;
  }

  return (
    <div ref={breadCrumbRef} className="w-full">
      {crumbs.map((crumb, i) => (
        <span className="_text-2xl" key={crumb}>
          <NavLink
            className={`pl-2 ${i === crumbs.length - 1 ? 'font-bold' : ''}`}
            to={`/${crumbs.slice(0, i + 1).join('/')}`}>
            {translate[crumb]}
          </NavLink>
          {i < crumbs.length - 1 && <span className="pl-2">&gt;</span>}
        </span>
      ))}
    </div>
  );
};

export default BreadCrumbs;
