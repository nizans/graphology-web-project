import ImageCard from 'components/common/ImageCard';
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
    <Section>
      <NavLink to="/admin/add/recommendations">{strings.addnew}</NavLink>
      {fetchError || deleteError ? (
        <ErrorSection error={fetchError || deleteError} />
      ) : (
        isSuccess && (
          <div className="grid grid-cols-3 gap-9 p-16">
            {data.payload.map(rec => (
              <ImageCard key={rec._id} imgComponent={<RecommendationsContainer data={rec} />}>
                <button onClick={() => handleDelete(rec._id)}>
                  <DeleteIcon />
                </button>
              </ImageCard>
            ))}
          </div>
        )
      )}
    </Section>
  );
};

export default RecommendationsView;
