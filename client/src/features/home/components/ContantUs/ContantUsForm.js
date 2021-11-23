import FormField from 'components/UI/FormField';
import LoadingButton from 'components/UI/LoadingButton';
import { contactApiRequests } from 'features/contact/api';
import { useFormik } from 'formik';
import { useMutateData } from 'lib/reactQuery';
import React from 'react';
import * as Yup from 'yup';
import { ContantUsFormStrings as strings } from './ContantUsForm.strings';
import ErrorMessage from 'components/UI/ErrorMessage';

const initialValues = { from: '', email: '', phone: '' };
const validation = {
  from: Yup.string().max(255).required(strings.required),
  email: Yup.string().max(255).required(strings.required).email(strings.invalidEmail),
  phone: Yup.string()
    .max(255)
    .required(strings.required)
    .matches('^0(5[^7]|[2-4]|[8-9]|7[0-9])[0-9]{7}$', strings.invalidPhone),
};

const ContantUsForm = () => {
  const { isLoading, error, isSuccess, mutate } = useMutateData(contactApiRequests.sendContactRequest);

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object(validation),
    onSubmit: values => {
      mutate({ body: JSON.stringify(values) });
    },
  });

  if (isSuccess) return <h1 className="p-16 _text text-3xl">{strings.success}</h1>;

  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col xl:flex-row justify-center items-start xl:items-center xl:p-16 w-full overflow-x-hidden xl:overflow-x-visible"
      >
        <FormField className="xl:mx-4" borderWidth="4" htmlFor="from" placeholder={strings.fullName} formik={formik} />
        <FormField
          className="xl:mx-4"
          borderWidth="4"
          htmlFor="phone"
          placeholder={strings.phoneNumber}
          formik={formik}
        />
        <FormField className="xl:mx-4" borderWidth="4" htmlFor="email" placeholder={strings.email} formik={formik} />
        <div className="grid grid-rows-2 mr-auto xl:mx-4">
          <LoadingButton isLoading={isLoading} />
        </div>
      </form>
      {error && <ErrorMessage error={error} />}
    </>
  );
};

export default ContantUsForm;
