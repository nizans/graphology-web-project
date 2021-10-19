import ErrorMessage from 'components/UI/ErrorMessage';
import LoadingButton from 'components/UI/LoadingButton';
import { certificationsApiCRUDRequests } from 'features/certification';
import { useMutateData } from 'lib/reactQuery';
import React, { useRef } from 'react';
import createFormData from 'utils/createFormData';
import { CertificateUploadStrings as strings } from './CertificateUploadStrings';

const CertificateUpload = () => {
  const fileInputRef = useRef(null);
  const {
    mutate: uploadCertificate,
    isLoading: isUploading,
    error: uploadError,
  } = useMutateData(certificationsApiCRUDRequests.create);

  const handleUpload = async file => {
    const formData = await createFormData({}, file);
    console.log(formData.getAll('image'));
    uploadCertificate({ body: formData });
    fileInputRef.current.value = '';
  };

  return (
    <div className="my-2">
      <input type="file" hidden ref={fileInputRef} onChange={e => handleUpload(e.target.files[0])} />
      <LoadingButton
        isLoading={isUploading}
        type="button"
        value={strings.addCertificate}
        onClick={() => fileInputRef.current.click()}
      >
        {strings.addCertificate}
      </LoadingButton>
      {uploadError && <ErrorMessage error={uploadError} />}
    </div>
  );
};

export default CertificateUpload;
