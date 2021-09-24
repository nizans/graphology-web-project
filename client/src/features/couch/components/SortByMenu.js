import { SORT_BY } from 'ApiRequest';
import DropDownMenu from 'components/UI/DropDownMenu';
import React from 'react';
import { useLocation } from 'react-router';

const SortByMenu = () => {
  const location = useLocation();
  const currenctQueryParams = new URLSearchParams(location.search);
  const getPrefix = () => {
    if (currenctQueryParams.has('find')) return `?find=${currenctQueryParams.get('find')}&sortby=`;
    return '?sortby=';
  };
  const sortByOptions = [
    { name: 'חדש ביותר', to: location.pathname + getPrefix() + SORT_BY.UPLOAD_DATE_DESC },
    { name: 'ישן ביותר', to: location.pathname + getPrefix() + SORT_BY.UPLOAD_DATE_ASC },
    { name: 'שם א-ת', to: location.pathname + getPrefix() + SORT_BY.TITLE_ASC },
    { name: 'שם ת-א', to: location.pathname + getPrefix() + SORT_BY.TITLE_DESC },
  ];

  return (
    <div className="my-auto">
      <DropDownMenu
        asLinks={true}
        values={sortByOptions}
        ulStyle={{ width: 'auto' }}
        liStyle={{ marginBottom: '1rem' }}
        itemClassName="text-xl"
      />
    </div>
  );
};

export default SortByMenu;
