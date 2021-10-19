import Section from 'components/common/Section';
import ErrorSection from 'components/UI/ErrorSection';
import Spinner from 'components/UI/Spinner';
import Underline from 'components/UI/Underline';
import { DimensionsContext } from 'context/DimensionsContext';
import useQueryParams from 'hooks/useQueryParams';
import { useFetchData } from 'lib/reactQuery';
import React, { createRef, useContext, useEffect, useState } from 'react';
import { servicesApiCRUDRequests } from '..';
import ServiceItem from './ServiceItem';
import { ServicesStrings as strings } from './Services.strings';
import ServicesNavMenu from './ServicesNavMenu';

export const Services = () => {
  const scroll = useQueryParams().get('scroll');

  const { data, isLoading, error } = useFetchData(servicesApiCRUDRequests.read());
  const [itemsRefs, setItemsRefs] = useState([]);
  const { headerHeight, windowHeight, breadCrumbHeight } = useContext(DimensionsContext);

  const handleScrollToItem = i => {
    if (itemsRefs[i]) {
      const { top } = itemsRefs[i].current.getBoundingClientRect();
      window.scroll({ top: top + window.scrollY - headerHeight, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (scroll)
      if (data) {
        const scrollToIndex = data.payload.findIndex(item => item.title === scroll);
        if (scrollToIndex !== -1) handleScrollToItem(scrollToIndex);
      }
  }, [data, scroll]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (data && data?.found_items)
      setItemsRefs(itemsRefs =>
        Array(data.found_items)
          .fill()
          .map((_, i) => itemsRefs[i] || createRef())
      );
  }, [data]);

  if (error) return <ErrorSection error={error} />;

  return (
    <Section className="flex flex-col items-center mt-14" setDefaultMinHeight={true}>
      <h1 className="text-7xl text-p-blue-dark pb-8">{strings.title}</h1>
      <Underline className="w-full sm:w-5/12 md:w-2/12" />
      <p className="text-p-blue text-3xl py-8">{strings.text}</p>
      <div className="w-full">
        <h2 className="text-p-blue text-3xl font-bold">{strings.offeredservices}</h2>
        {isLoading ? (
          <div className="w-full h-72 relative">
            <Spinner />
          </div>
        ) : (
          <ServicesNavMenu onItemClick={handleScrollToItem} data={data.payload} />
        )}
      </div>
      {!isLoading && (
        <div className="divide-y-2 divide-p-blue flex flex-col">
          {data.payload.map((item, i) => (
            <ServiceItem ref={itemsRefs[i]} key={item._id} item={item} />
          ))}
        </div>
      )}
    </Section>
  );
};
