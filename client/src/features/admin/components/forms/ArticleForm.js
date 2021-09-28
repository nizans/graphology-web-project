import ImageUploadInput from 'components/common/ImageUploadInput';
import TextEditor from 'components/common/TextEditor';
import ErrorMessage from 'components/UI/ErrorMessage';
import FormField from 'components/UI/FormField';
import LoadingButton from 'components/UI/LoadingButton';
import { articlesApiCRUDRequests } from 'features/articles';
import { useFormik } from 'formik';
import { useMutateData } from 'lib/reactQuery';
import React, { useState } from 'react';
import createFormData from 'utils/createFormData';
import * as Yup from 'yup';

const strings = {
  title: 'כותרת',
  sourceFrom: 'מקור הכתבה',
  sourceURL: 'לינק למקור הכתבה',
  publishDate: 'תאריך פרסום',
  send: 'העלה כתבה',
  content: 'תוכן הכתבה',
  contentPlaceholder: 'כתוב פה את תוכן הכתבה',
  update: 'עדכן כתבה',
  notext: 'לא הוכנס טסט',
  uploadImage: 'העלה תמונה',
  urlInvalid: 'הלינק אינו תקין',
  required: 'שדה דרוש',
};

const ArticleForm = ({ data: item }) => {
  const { mutate, isLoading, error, isSuccess } = useMutateData(
    item ? articlesApiCRUDRequests.update : articlesApiCRUDRequests.create
  );

  const [images, setImages] = useState([]);

  const initialValues = {
    title: item?.title || '',
    sourceFrom: item?.sourceFrom || '',
    sourceURL: item?.sourceURL || '',
    publishDate: item?.publishDate || '',
    success: 'תודה, הפרטים התקבלו בהצלחה!',

    text: item?.text || '',
  };

  const validation = Yup.object({
    title: Yup.string().required(strings.required),
    sourceFrom: Yup.string().required(strings.required),
    sourceURL: Yup.string().url(strings.urlInvalid).required(strings.required),
    publishDate: Yup.date()
      .required()
      .default(() => new Date()),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validation,
    onSubmit: values => {
      const formData = createFormData(values, images);
      mutate({ body: formData });
    },
    enableReinitialize: true,
  });
  if (isSuccess) return <h1 className="p-16 _text-3xl m-auto text-center font-bold">{strings.success}</h1>;

  return (
    <form onSubmit={formik.handleSubmit} className="flex h-full justify-between w-full">
      <div className="flex flex-col justify-evenly items-center">
        <FormField formik={formik} htmlFor="title" placeholder={strings.title} />
        <FormField formik={formik} htmlFor="sourceFrom" placeholder={strings.sourceFrom} />
        <FormField formik={formik} htmlFor="sourceURL" placeholder={strings.sourceURL} />
        <FormField formik={formik} topLabel={strings.publishDate} htmlFor="publishDate" type="date" />
        <ImageUploadInput images={images} onImageChange={setImages} />
        <LoadingButton isLoading={isLoading} value={item ? strings.update : strings.send} />
        {error && (
          <label>
            <ErrorMessage error={error} />
          </label>
        )}
      </div>
      <div className="flex flex-col w-full">
        <TextEditor
          title={strings.content}
          placeholder={strings.contentPlaceholder}
          name="text"
          handleChange={formik.handleChange}
          value={formik.values.text}
        />
      </div>
    </form>
  );
};

export default ArticleForm;
