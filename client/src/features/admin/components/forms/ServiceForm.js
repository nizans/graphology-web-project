import ImageUploadInput from 'components/common/ImageUploadInput';
import TextEditor from 'components/common/TextEditor';
import ErrorMessage from 'components/UI/ErrorMessage';
import FormField from 'components/UI/FormField';
import LoadingButton from 'components/UI/LoadingButton';
import { servicesApiCRUDRequests } from 'features/services';
import { useFormik } from 'formik';
import { useMutateData } from 'lib/reactQuery';
import React, { useState } from 'react';
import createFormData from 'utils/createFormData';
import * as Yup from 'yup';
import { ServiceFormStrings as strings } from './ServiceForm.strings';

const ServiceForm = ({ data: item }) => {
  const { mutate, isLoading, error, isSuccess } = useMutateData(
    item ? servicesApiCRUDRequests.update : servicesApiCRUDRequests.create
  );
  const [images, setImages] = useState([]);

  const initialValues = {
    title: item?.title || '',
    description: item?.description || '',
  };

  const validation = Yup.object({
    title: Yup.string().required(strings.required),
    description: Yup.string().required(strings.required),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validation,
    onSubmit: values => {
      const formData = createFormData(values, images);
      mutate({ uri: item?._id, body: formData });
    },
  });

  if (isSuccess) return <h1 className="p-16 _text text-3xl m-auto text-center font-bold">{strings.success}</h1>;

  return (
    <form onSubmit={formik.handleSubmit} className="flex h-full w-full">
      <div className="flex flex-col justify-evenly items-center">
        <FormField formik={formik} htmlFor="title" placeholder={strings.title} />
        <ImageUploadInput onImageChange={setImages} images={images.map(img => img.full)} />
        <LoadingButton isLoading={isLoading} value={item ? strings.update : strings.send} />
        {error && (
          <label>
            <ErrorMessage error={error} />
          </label>
        )}
      </div>
      <div className="flex flex-col w-full">
        <TextEditor
          title={strings.description}
          placeholder={strings.descriptionPlaceholder}
          name="description"
          handleChange={formik.handleChange}
          value={formik.values.description}
        />
      </div>
    </form>
  );
};

export default ServiceForm;
