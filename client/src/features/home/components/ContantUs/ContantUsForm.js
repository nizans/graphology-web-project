import FormField from 'components/UI/FormField';
import LoadingButton from 'components/UI/LoadingButton';
import Spinner from 'components/UI/Spinner';
import { contactApiRequests, CONTACT_API } from 'features/contact/api';
import { ErrorMessage, useFormik } from 'formik';
import { useMutateData } from 'lib/reactQuery';
import React from 'react';
import * as Yup from 'yup';

const strings = {
  fullName: 'שם מלא',
  phoneNumber: 'מספר פלאפון',
  email: 'אימייל',
  invalidEmail: 'כתובת אימייל לא תקינה',
  required: 'שדה דרוש',
  invalidPhone: 'מספר לא תקין',
  success: 'תודה, הפרטים התקבלו בהצלחה!',
};

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

  if (isSuccess) return <h1 className="p-16 _text-3xl">{strings.success}</h1>;
  if (error) return <ErrorMessage error={error} />;

  return isLoading ? (
    <div className="w-full h-full p-16">
      <Spinner />
    </div>
  ) : (
    <form onSubmit={formik.handleSubmit} className="flex flex-col lg:flex-row justify-center items-center p-16">
      <FormField borderWidth="4" htmlFor="from" placeholder={strings.fullName} formik={formik} />
      <FormField borderWidth="4" htmlFor="phone" placeholder={strings.phoneNumber} formik={formik} />
      <FormField borderWidth="4" htmlFor="email" placeholder={strings.email} formik={formik} />
      <div className="grid grid-rows-2 mx-4">
        <LoadingButton isLoading={isLoading} />
      </div>
    </form>
  );
};

export default ContantUsForm;
