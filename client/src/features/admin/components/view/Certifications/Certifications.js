import ImageCard from 'components/common/ImageCard';
import Section from 'components/common/Section';
import { DeleteIcon } from 'components/UI/ButtonsCell';
import ErrorSection from 'components/UI/ErrorSection';
import LoadingSection from 'components/UI/LoadingSection';
import TableItemImage from 'components/UI/TableItemImage';
import { certificationsApiCRUDRequests } from 'features/certification';
import { useFetchData, useMutateData } from 'lib/reactQuery';
import React from 'react';
import CertificateUpload from './CertificateUpload';

const Certifications = () => {
  const {
    data,
    isLoading,
    error: fetchError,
    isSuccess,
  } = useFetchData({
    ...certificationsApiCRUDRequests.read(),
    settings: { refetchOnMount: false, refetchOnWindowFocus: false },
  });

  const {
    mutate: deleteCertificate,
    isLoading: isDeleting,
    error: deleteError,
  } = useMutateData(certificationsApiCRUDRequests.delete);

  const handleDelete = id => deleteCertificate({ uri: id });
  if (isLoading || isDeleting) return <LoadingSection />;

  return (
    <Section>
      <CertificateUpload />
      {fetchError || deleteError ? (
        <ErrorSection error={fetchError || deleteError} />
      ) : (
        isSuccess && (
          <div className="grid grid-cols-3 gap-9 p-16">
            {data.payload.map(cert => (
              <ImageCard
                key={cert._id}
                imgComponent={
                  <TableItemImage style={{ objectFit: 'cover' }} height="500px" width="100%" image={cert.images} />
                }>
                <button onClick={() => handleDelete(cert._id)}>
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

export default Certifications;
