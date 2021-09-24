import ResponsivePlayer from 'components/common/ResponsivePlayer';
import Section from 'components/common/Section';
import ErrorSection from 'components/UI/ErrorSection';
import LoadingSection from 'components/UI/LoadingSection';
import Underline from 'components/UI/Underline';
import { BreadCrumbsTitleContext } from 'context/breadCrumbsTitleContext';
import parse from 'html-react-parser';
import { useFetchData } from 'lib/reactQuery';
import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import { toDate } from 'utils/toDate';
import { videosApiCRUDRequests } from '..';

export const VideoPage = () => {
  const breadCrumbsTitleCTX = useContext(BreadCrumbsTitleContext);
  const { id } = useParams();
  const { isLoading, error, data: item } = useFetchData(videosApiCRUDRequests.read(id));

  useEffect(() => {
    if (item) {
      breadCrumbsTitleCTX.setTitle(item._id, item.title);
    }
  }, [item]); // eslint-disable-line react-hooks/exhaustive-deps

  return isLoading ? (
    <LoadingSection />
  ) : error ? (
    <ErrorSection error={error} />
  ) : (
    <Section className="mb-4">
      <div className="flex justify-between items-center pb-1 ">
        <h1 className="_text-bold-dark-5xl">{item.title}</h1>
        <h3 className="_text-2xl">{toDate(item.uploadDate)}</h3>
      </div>
      <Underline />
      <div className="w-10/12 m-auto my-4 ">
        <ResponsivePlayer url={item.url} controls={true} onReady={() => {}} />
      </div>
      <div className="_text-2xl w-10/12 m-auto">{parse(item.description)}</div>
    </Section>
  );
};
