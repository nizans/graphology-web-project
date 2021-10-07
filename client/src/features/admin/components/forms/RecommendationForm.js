import ErrorMessage from 'components/UI/ErrorMessage';
import FormField from 'components/UI/FormField';
import LoadingButton from 'components/UI/LoadingButton';
import { RecommendationFormStrings as strings } from './RecommendationForm.strings';
import { recommendationApiCRUDRequests } from 'features/recommendations';
import { useFormik } from 'formik';
import { useMutateData } from 'lib/reactQuery';
import React from 'react';
import { HEB_REQUIRED_FIELD } from 'strings/common';
import * as Yup from 'yup';

const RecommendationForm = ({ data: item }) => {
  const { mutate, isLoading, error, isSuccess } = useMutateData(recommendationApiCRUDRequests.create);
  const initialValues = {
    name: item?.name || '',
    text: item?.text || '',
  };
  const validation = Yup.object({ name: Yup.string(), text: Yup.string().required(HEB_REQUIRED_FIELD) });

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
      className="p-16 _text text-3xl flex flex-col text-center font-bold w-full items-center"
    >
      <div className="w-1/2 h-full">
        <FormField formik={formik} htmlFor="name" placeholder={strings.name} />
      </div>
      <textarea
        className="w-1/2 rounded-xl border-p-blue border-2 outline-none p-2 my-4"
        rows="5"
        placeholder={strings.textPlaceHolder}
        name="text"
        id="text"
        value={formik.values.text}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
      />
      <LoadingButton isLoading={isLoading} value={item ? strings.update : strings.send} />
      {error && (
        <label>
          <ErrorMessage error={error} />
        </label>
      )}
    </form>
  );
};

export default RecommendationForm;
