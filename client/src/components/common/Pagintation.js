import React from 'react';
import { NavLink, useRouteMatch, useLocation } from 'react-router-dom';

const Pagintation = ({ pages, page }) => {
  const { path } = useRouteMatch();
  const currenctQueryParams = new URLSearchParams(useLocation().search);

  const setQueryParams = (name, value) => {
    currenctQueryParams.set(name, value);
    return currenctQueryParams.toString();
  };

  return pages <= 1 ? (
    ''
  ) : (
    <div className="py-20 flex justify-center items-center">
      {pages && page < pages - 1 && (
        <NavLink
          to={{
            search: setQueryParams('page', Number(page) + 1),
          }}
          className="_text-2xl px-4">
          &lt;
        </NavLink>
      )}
      <ul className="flex justify-center divide-x-2 divide-p-blue _text-3xl flex-row-reverse">
        {Array.from(Array(pages).keys(), (_, i) => (
          <li key={i} className="list-none px-2">
            <NavLink
              to={{
                search: setQueryParams('page', i),
              }}
              className={Number(page) === i ? 'font-bold' : ''}>
              <h5>{i + 1}</h5>
            </NavLink>
          </li>
        ))}
      </ul>
      {page > 0 && (
        <NavLink
          to={{
            search: setQueryParams('page', Number(page) - 1),
          }}
          className="px-4 _text-2xl">
          &gt;
        </NavLink>
      )}
    </div>
  );
};

export default Pagintation;
