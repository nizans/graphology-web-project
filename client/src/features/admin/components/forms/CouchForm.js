import ImageUploadInput from 'components/common/ImageUploadInput';
import TextEditor from 'components/common/TextEditor';
import ErrorMessage from 'components/UI/ErrorMessage';
import LoadingButton from 'components/UI/LoadingButton';
import FormField from 'components/UI/FormField';
import { contentsApiCRUDRequests } from 'features/couch';
import { useFormik } from 'formik';
import { useMutateData } from 'lib/reactQuery';
import React, { useState } from 'react';
import createFormData from 'utils/createFormData';
import * as Yup from 'yup';
import { CouchFormStrings as strings } from './CouchForm.strings';

const CouchForm = ({ data: item }) => {
  const { mutate, isLoading, error, isSuccess } = useMutateData(
    item ? contentsApiCRUDRequests.update : contentsApiCRUDRequests.create
  );

  const [images, setImages] = useState(item?.images.map(img => img.full) || []);

  const initialValues = {
    title: item?.title || '',
    subtitle: item?.subtitle || '',
    publishDate: item?.publishDate || '',
    text: item?.text || '',
  };
  const validation = Yup.object({
    title: Yup.string().required(strings.required),
    subtitle: Yup.string(),
    publishDate: Yup.date().required(strings.required),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validation,
    onSubmit: async values => {
      const formData = await createFormData(values, images);
      mutate({ body: formData, uri: item?._id });
    },
    enableReinitialize: true,
  });

  if (isSuccess) return <h1 className="p-16 _text text-3xl m-auto text-center font-bold">{strings.success}</h1>;

  return (
    <form onSubmit={formik.handleSubmit} className="grid grid-cols-4 h-full w-full gap-x-10">
      <div className="flex flex-col justify-evenly items-center">
        <FormField formik={formik} htmlFor="title" placeholder={strings.title} />
        <div className="px-4 py-4  w-full">
          <label htmlFor="subtitle" className="_text text-2xl">
            {strings.subtitle}
          </label>
          <textarea
            rows="6"
            placeholder={strings.subtitle}
            className="w-full  border-p-blue border-2 _text text-xl"
            name="subtitle"
            id="subtitle"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.subtitle}
          />
        </div>
        <FormField formik={formik} topLabel={strings.publishDate} htmlFor="publishDate" type="date" />
        <ImageUploadInput onImageChange={setImages} images={images} />
        <LoadingButton isLoading={isLoading} value={item ? strings.update : strings.send} />
        {error && (
          <label>
            <ErrorMessage error={error} />
          </label>
        )}
      </div>
      <div className="flex flex-col w-full col-span-3">
        <TextEditor
          title={strings.text}
          placeholder={strings.textPlaceholder}
          name="text"
          handleChange={formik.handleChange}
          value={formik.values.text}
        />
      </div>
    </form>
  );
};

export default CouchForm;
