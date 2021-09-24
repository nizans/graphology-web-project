import ImageUploadInput from 'components/common/ImageUploadInput';
import TextEditor from 'components/common/TextEditor';
import FormField from 'components/UI/FormField';
import { contentsApiCRUDRequests } from 'features/couch';
import { useFormik } from 'formik';
import { useMutateData } from 'lib/reactQuery';
import React, { useState } from 'react';
import createFormData from 'utils/createFormData';
import * as Yup from 'yup';

const strings = {
  title: 'כותרת',
  subtitle: 'תת כותרת',
  publishDate: 'תאריך פרסום',
  send: 'העלה מאמר',
  update: 'העלה מאמר',
  text: 'תוכן המאמר',
  textPlaceholder: 'כתוב פה את תוכן המאמר',
  notext: 'לא הוכנס טסט',
  required: 'שדה דרוש',
};

const CouchForm = ({ data: item }) => {
  const { mutate, isLoading, error } = useMutateData(contentsApiCRUDRequests.create);
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
    publishDate: Yup.date()
      .required(strings.required)
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
  return (
    <form onSubmit={formik.handleSubmit} className="flex h-full justify-between w-full">
      <div className="flex flex-col justify-evenly items-center">
        <FormField formik={formik} htmlFor="title" placeholder={strings.title} />
        <div className="px-4 py-4  w-full">
          <label htmlFor="subtitle" className="_text-2xl">
            {strings.subtitle}
          </label>
          <textarea
            rows="6"
            placeholder={strings.subtitle}
            className="w-full  border-p-blue border-2 _text-xl"
            name="subtitle"
            id="subtitle"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.subtitle}
          />
        </div>
        <FormField formik={formik} topLabel={strings.publishDate} htmlFor="publishDate" type="date" />
        <ImageUploadInput onImageChange={setImages} images={images} />
        <button className="button" type="submit" style={{ width: 'fit-content' }}>
          {item ? strings.update : strings.send}
        </button>
      </div>
      <div className="flex flex-col w-full">
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
