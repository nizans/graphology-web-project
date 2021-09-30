import ErrorMessage from 'components/UI/ErrorMessage';
import LoadingButton from 'components/UI/LoadingButton';
import { certificationsApiCRUDRequests } from 'features/certification';
import { useMutateData } from 'lib/reactQuery';
import React, { useRef } from 'react';
import createFormData from 'utils/createFormData';

const strings = {
  addCertificate: 'הוספת תעודה',
};

const CertificateUpload = () => {
  const fileInputRef = useRef(null);
  const {
    mutate: uploadCertificate,
    isLoading: isUploading,
    error: uploadError,
  } = useMutateData(certificationsApiCRUDRequests.create);

  const handleUpload = files => {
    const formData = createFormData({}, files);
    uploadCertificate({ body: formData });
    fileInputRef.current.value = '';
  };

  return (
    <div className="my-2">
      <input type="file" hidden ref={fileInputRef} onChange={e => handleUpload(e.target.files)} />
      <LoadingButton
        isLoading={isUploading}
        type="button"
        value={strings.addCertificate}
        onClick={() => fileInputRef.current.click()}>
        {strings.addCertificate}
      </LoadingButton>
      {uploadError && <ErrorMessage error={uploadError} />}
    </div>
  );
};

export default CertificateUpload;
