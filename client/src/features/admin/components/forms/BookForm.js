import ImageUploadInput from 'components/common/ImageUploadInput';
import TextEditor from 'components/common/TextEditor';
import ErrorMessage from 'components/UI/ErrorMessage';
import FormField from 'components/UI/FormField';
import LoadingButton from 'components/UI/LoadingButton';
import { booksApiCRUDRequests } from 'features/books';
import { useFormik } from 'formik';
import { useMutateData } from 'lib/reactQuery';
import React, { useState } from 'react';
import createFormData from 'utils/createFormData';
import * as Yup from 'yup';
import { BookFormStrings as strings } from './BookForm.strings';

const BookForm = ({ data: item }) => {
  const { mutate, isLoading, error, isSuccess } = useMutateData(
    item ? booksApiCRUDRequests.update : booksApiCRUDRequests.create
  );

  const [images, setImages] = useState(item?.images.map(img => img.full) || []);

  const initialValues = {
    title: item?.title || '',
    author: item?.author || '',
    description: item?.description || '',
    publishDate: item?.publishDate || '',
  };
  const validation = Yup.object({
    title: Yup.string().required(),
    author: Yup.string().required(),
    publishDate: Yup.date()
      .required()
      .default(() => new Date()),
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
      <div className="flex flex-col justify-evenly items-center col-span-1">
        <FormField formik={formik} htmlFor="title" placeholder={strings.title} />
        <FormField formik={formik} htmlFor="author" placeholder={strings.author} />
        <FormField formik={formik} topLabel={strings.publishDate} htmlFor="publishDate" type="date" />
        <ImageUploadInput onImageChange={setImages} images={images} />
        <div className="grid grid-rows-2 mx-4 _text text-3xl">
          <LoadingButton isLoading={isLoading} value={item ? strings.update : strings.send} />
          {error && (
            <label>
              <ErrorMessage error={error} />
            </label>
          )}
        </div>
      </div>
      <div className="flex flex-col w-full col-span-3 h-full">
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

export default BookForm;
