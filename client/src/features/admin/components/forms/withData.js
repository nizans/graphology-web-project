import LoadingSection from 'components/UI/LoadingSection';
import React from 'react';
import { useParams } from 'react-router';
import { useFetchData } from 'lib/reactQuery';

const withData = (FormComponent, apiRequest) => () => {
  const { id } = useParams();
  const { isLoading, data } = useFetchData(apiRequest.read(id));

  return (
    <>
      {data && <FormComponent data={data} />}
      {isLoading && <LoadingSection />}
    </>
  );
};

export default withData;
