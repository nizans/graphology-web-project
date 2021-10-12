import TextEditor from 'components/common/TextEditor';
import ErrorMessage from 'components/UI/ErrorMessage';
import FormField from 'components/UI/FormField';
import LoadingButton from 'components/UI/LoadingButton';
import { servicesApiCRUDRequests } from 'features/services';
import { useFormik } from 'formik';
import { useMutateData } from 'lib/reactQuery';
import React, { useRef, useState } from 'react';
import createFormData from 'utils/createFormData';
import * as Yup from 'yup';
import { ServiceFormStrings as strings } from './ServiceForm.strings';

const ServiceForm = ({ data: item }) => {
  const { mutate, isLoading, error, isSuccess } = useMutateData(
    item ? servicesApiCRUDRequests.update : servicesApiCRUDRequests.create
  );

  const [image, setImage] = useState(item?.image.full);

  const fileInputRef = useRef(null);

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
    onSubmit: async values => {
      const formData = await createFormData(values, image);
      mutate({ uri: item?._id, body: formData });
    },
  });

  if (isSuccess) return <h1 className="p-16 _text text-3xl m-auto text-center font-bold">{strings.success}</h1>;

  return (
    <form onSubmit={formik.handleSubmit} className="flex h-full w-full ">
      <div className="flex flex-col justify-evenly items-center">
        <FormField formik={formik} htmlFor="title" placeholder={strings.title} />
        <label for="image">
          <img
            name="image"
            width="150px"
            className="mb-4 mx-auto object-contain"
            src={image instanceof File || image instanceof Blob ? URL.createObjectURL(image) : image}
            alt=""
          />
          <input hidden type="file" ref={fileInputRef} onChange={e => setImage(e.target.files[0])} />
          <button onClick={() => fileInputRef.current.click()} type="button" className="button">
            {strings.uploadImage}
          </button>
        </label>
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
