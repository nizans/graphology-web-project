import Section from 'components/common/Section';
import { DeleteIcon } from 'components/Icons/ButtonsCellIcons';
import ErrorSection from 'components/UI/ErrorSection';
import LoadingSection from 'components/UI/LoadingSection';
import { recommendationApiCRUDRequests } from 'features/recommendations';
import RecommendationsContainer from 'features/recommendations/components/RecommendationsContainer';
import { useFetchData, useMutateData } from 'lib/reactQuery';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { RecommendationsViewStrings as strings } from './RecommendationsViewStrings';

const RecommendationsView = () => {
  const {
    data,
    isLoading,
    error: fetchError,
    isSuccess,
  } = useFetchData(recommendationApiCRUDRequests.read(), {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  const {
    mutate: deleteCertificate,
    isLoading: isDeleting,
    error: deleteError,
  } = useMutateData(recommendationApiCRUDRequests.delete);

  const handleDelete = id => deleteCertificate({ uri: id });
  if (isLoading || isDeleting) return <LoadingSection />;

  return (
    <div className="my-2 ">
      <NavLink to="/admin/add/recommendations" className="button my-4">
        {strings.addnew}
      </NavLink>
      <div>
        {fetchError || deleteError ? (
          <ErrorSection error={fetchError || deleteError} />
        ) : (
          isSuccess && (
            <div className="grid grid-cols-3 gap-9 p-16">
              {data.payload.map(rec => (
                <div key={rec._id}>
                  <RecommendationsContainer data={rec} />
                  <button onClick={() => handleDelete(rec._id)}>
                    <DeleteIcon />
                  </button>
                </div>
              ))}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default RecommendationsView;
