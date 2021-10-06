import Pagintation from 'components/common/Pagintation';
import Section from 'components/common/Section';
import ErrorSection from 'components/UI/ErrorSection';
import LoadingSection from 'components/UI/LoadingSection';
import Underline from 'components/UI/Underline';
import useQueryParams from 'hooks/useQueryParams';
import { useFetchData } from 'lib/reactQuery';
import React, { useState } from 'react';
import { contentsApiCRUDRequests } from '..';
import CouchItem from './CouchItem';
import CouchMenu from './CouchMenu';
import { CouchStrings as strings } from '../strings/strings';

//TODO - more info drawer for small screens

const Couch = () => {
  const page = useQueryParams().get('page');
  const find = useQueryParams().get('find');
  const sortby = useQueryParams().get('sortby');

  const [searchInput, setSearchInput] = useState('');

  const { isLoading, data, error, isSuccess } = useFetchData(
    contentsApiCRUDRequests.read(null, { find, page, searchInput, sortby })
  );

  if (isLoading) return <LoadingSection />;

  return (
    <Section setDefaultMinHeight={true}>
      <div>
        <div className="w-full">
          <h1 className="_title text-center">{strings.title}</h1>
          <h3 className="_text-bold text-lg xs:text-2xl text-center">{strings.subtitle}</h3>
        </div>
        <CouchMenu searchInput={searchInput} setSearchInput={setSearchInput} />
      </div>

      <Underline thickness={4} />

      {error && <ErrorSection error={error} />}

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
