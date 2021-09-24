import ImageUploadInput from 'components/common/ImageUploadInput';
import TextEditor from 'components/common/TextEditor';
import FormField from 'components/UI/FormField';
import { servicesApiCRUDRequests } from 'features/services';
import { useFormik } from 'formik';
import { useMutateData } from 'lib/reactQuery';
import React, { useState } from 'react';
import createFormData from 'utils/createFormData';
import * as Yup from 'yup';

const strings = {
  title: 'שם השירות',
  description: 'תיאור השירות',
  descriptionPlaceholder: 'כתוב פה את תיאור השירות',
  required: 'שדה דרוש',
  send: 'העלה שירות',
  update: 'עדכן שירות',
  uploadImage: 'העלה תמונה',
};

const ServiceForm = ({ data: item }) => {
  const { mutate, isLoading, error } = useMutateData(servicesApiCRUDRequests.create);
  const [images, setImages] = useState([]);

  const initialValues = {
    title: item?.title || '',
    description: item?.description || '',
  };
  const validation = Yup.object({
    title: Yup.string().required(strings.required),
  });
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validation,
    onSubmit: values => {
      const formData = createFormData(values, images);
      mutate({ body: formData });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="flex h-full w-full ">
      <div className="flex flex-col justify-evenly items-center">
        <FormField formik={formik} htmlFor="title" placeholder={strings.title} />
        <ImageUploadInput onImageChange={setImages} images={images.map(img => img.full)} />
        <button className="button" type="submit" style={{ width: 'fit-content' }}>
          {item ? strings.update : strings.send}
        </button>
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
