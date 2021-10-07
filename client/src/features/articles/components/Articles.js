import Pagintation from 'components/common/Pagintation';
import Section from 'components/common/Section';
import ErrorSection from 'components/UI/ErrorSection';
import LoadingSection from 'components/UI/LoadingSection';
import Underline from 'components/UI/Underline';
import useQueryParams from 'hooks/useQueryParams';
import { useFetchData } from 'lib/reactQuery';
import React from 'react';
import { HEB_MICHAL_DORON_ARTICLES } from 'strings/common';
import { articlesApiCRUDRequests } from '..';
import ArticleContainer from './ArticleContainer';

export const Articles = () => {
  const page = useQueryParams().get('page');
  const { data, isLoading, error, isSuccess } = useFetchData(articlesApiCRUDRequests.read(null, { page }));

  return (
    <Section>
      <div className="flex flex-col items-center mb-9">
        <h1 className="_text-bold-dark text-8xl">{HEB_MICHAL_DORON_ARTICLES}</h1>
        <Underline style={{ width: '33%' }} />
        {error ? (
          <ErrorSection error={error} />
        ) : isLoading ? (
          <LoadingSection />
        ) : (
          <div className="grid  lg:grid-cols-3 pt-16 gap-28">
            {data.payload.map(item => (
              <ArticleContainer key={item._id} item={item} />
            ))}
          </div>
        )}
      </div>
      {isSuccess && <Pagintation pages={data.pages} page={data.page} />}
    </Section>
  );
};
