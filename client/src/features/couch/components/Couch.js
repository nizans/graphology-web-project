import Pagintation from 'components/common/Pagintation';
import Section from 'components/common/Section';
import DropDownMenu from 'components/UI/DropDownMenu';
import ErrorSection from 'components/UI/ErrorSection';
import LoadingSection from 'components/UI/LoadingSection';
import SearchInput from 'components/UI/SearchInput';
import Underline from 'components/UI/Underline';
import useDimensions from 'hooks/useDimensions';
import useQueryParams from 'hooks/useQueryParams';
import { useFetchData } from 'lib/reactQuery';
import React, { useEffect, useState } from 'react';
import { contentsApiCRUDRequests } from '..';
import CouchItem from './CouchItem';
import SortByMenu from './SortByMenu';
const strings = {
  title: 'על ספת הגרפולוג',
  subtitle: 'ניתוח כתב יד של יוצרים שונים',

  moreInfo: 'מידע נוסף',
  orderBy: 'מיון לפי',
  loading: 'טוען',
};

const Couch = () => {
  const page = useQueryParams().get('page');
  const find = useQueryParams().get('find');
  const sortby = useQueryParams().get('sortby');
  const [searchInput, setSearchInput] = useState('');
  const { isLoading, data, error, isSuccess } = useFetchData(
    contentsApiCRUDRequests.read(null, { find, page, searchInput, sortby })
  );

  const [ref, dim] = useDimensions();

  return isLoading ? (
    <LoadingSection />
  ) : (
    <Section>
      <div ref={ref}>
        <div className="w-full">
          <h1 className="_text-bold-dark-7xl text-center">{strings.title}</h1>
          <h3 className="_text-bold-3xl text-center">{strings.subtitle}</h3>
        </div>

        <div className="w-full flex flex-col sm:flex-row justify-between px-4 mt-8 pb-8">
          <SortByMenu />

          <div className="flex flex-col sm:flex-row justify-evenly items-center">
            <SearchInput className="m-auto" value={searchInput} handleSearch={setSearchInput} />
            <span className="_text-bold-2xl sm:mr-6 cursor-pointer">? {strings.moreInfo}</span>
          </div>
        </div>
      </div>

      <Underline thickness={4} />

      {error && <ErrorSection error={error} addToDef={dim?.height + 1} />}
      {isSuccess && (
        <div className="flex flex-col divide-y-2 divide-p-brown w-full">
          {data.payload.map((item, i) => (
            <CouchItem data={item} key={item._id} />
          ))}
          <Pagintation pages={data.pages} page={data.page} />
        </div>
      )}
    </Section>
  );
};

export default Couch;
