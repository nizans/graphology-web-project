import ResponsivePlayer from 'components/common/ResponsivePlayer';
import TextEditor from 'components/common/TextEditor';
import ErrorMessage from 'components/UI/ErrorMessage';
import FormField from 'components/UI/FormField';
import LoadingButton from 'components/UI/LoadingButton';
import { videosApiCRUDRequests } from 'features/videos/api';
import { useFormik } from 'formik';
import { useMutateData } from 'lib/reactQuery';
import React from 'react';
import * as Yup from 'yup';

const strings = {
  title: 'שם הסרטון',
  description: 'תיאור הסרטון',
  descriptionPlaceholder: 'כתוב פה את תיאור הסרטון',
  url: 'לינק לסרטון',
  required: 'שדה דרוש',
  urlInvalid: 'הלינק אינו תקין',
  send: 'שלח',
  update: 'עדכן שירות',
  success: 'תודה, הפרטים התקבלו בהצלחה!',
};

const VideoForm = ({ data: item }) => {
  const { mutate, isLoading, error, isSuccess } = useMutateData(
    item ? videosApiCRUDRequests.update : videosApiCRUDRequests.create
  );

  const initialValues = {
    title: item?.title || '',
    description: item?.description || '',
    url: item?.url || '',
  };
  const validation = Yup.object({
    title: Yup.string().required(strings.required),
    description: Yup.string(),
    url: Yup.string().url(strings.urlInvalid).required(strings.required),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validation,
    onSubmit: values => {
      mutate({ body: JSON.stringify(values) });
    },
  });

  if (isSuccess) return <h1 className="p-16 _text text-3xl m-auto text-center font-bold">{strings.success}</h1>;
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="w-full flex justify-between items-center divide-x-2 divide-x-reverse divide-p-gray">
      <div className="flex flex-col w-full justify-evenly items-start pl-10 h-full">
        <FormField formik={formik} htmlFor="title" placeholder={strings.title} className="w-full" />
        <div className="w-full mx-4">
          <TextEditor
            title={strings.description}
            placeholder={strings.descriptionPlaceholder}
            height="300px"
            name="description"
            handleChange={formik.handleChange}
            value={formik.values.description}
          />
        </div>
        <FormField formik={formik} className="_text text-xl w-full" htmlFor="url" placeholder={strings.url} />
        <LoadingButton isLoading={isLoading} value={item ? strings.update : strings.send} />
        {error && (
          <label>
            <ErrorMessage error={error} />
          </label>
        )}
      </div>
      <div className="w-full pr-6">
        <ResponsivePlayer url={!formik.errors.url && formik.values.url} />
      </div>
    </form>
  );
};

export default VideoForm;
