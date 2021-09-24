import Pagintation from 'components/common/Pagintation';
import ErrorSection from 'components/UI/ErrorSection';
import LoadingSection from 'components/UI/LoadingSection';
import useQueryParams from 'hooks/useQueryParams';
import { useFetchData } from 'lib/reactQuery';
import React from 'react';
import { booksApiCRUDRequests } from '..';
import BooksItem from './BooksItem';

const Books = () => {
  const page = useQueryParams().get('page');
  const { isLoading, data, error } = useFetchData(booksApiCRUDRequests.read(null, { page }));

  if (error) return <ErrorSection error={error} />;
  return isLoading ? (
    <LoadingSection />
  ) : (
    <div>
      {data.payload.map((item, i) => (
        <BooksItem data={item} key={i} />
      ))}
      <Pagintation page={data.page} pages={data.pages} />
    </div>
  );
};

export default Books;
