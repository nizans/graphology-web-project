import ErrorMessage from 'components/UI/ErrorMessage';
import ErrorSection from 'components/UI/ErrorSection';
import FormField from 'components/UI/FormField';
import LoadingButton from 'components/UI/LoadingButton';
import { adminApiCRUDRequests } from 'features/admin';
import { useFormik } from 'formik';
import { useMutateData } from 'lib/reactQuery';
import React from 'react';
import * as Yup from 'yup';

const strings = {
  required: 'שדה דרוש',
  name: 'שם',
  email: 'אימייל',
  password: 'בחר סיסמא',
  validatePassword: 'וודא סיסמא',
  invalidEmail: 'אימייל לא תקין',
  emailPlaceholder: 'הכנס אימייל',
  namePlaceholder: 'שם המנהל',
  minLength: 'סיסמא חייבת להכיל לפחות 6 תווים',
  passwordMustMatch: 'סיסמא לא תואמת',
  passwordPlaceHolder: 'סיסמא',
};

const AdminForm = () => {
  const { mutate, isLoading, error } = useMutateData(adminApiCRUDRequests.create);

  const initialValues = {
    name: '',
    email: '',
    password: '',
    validatePassword: '',
  };
  const validation = Yup.object({
    name: Yup.string().required(strings.required),
    email: Yup.string().required(strings.required).email(strings.invalidEmail),
    password: Yup.string().required(strings.required).min(6, strings.minLength),
    validatePassword: Yup.string()
      .required(strings.required)
      .oneOf([Yup.ref('password'), null], strings.passwordMustMatch),
  });
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validation,
    onSubmit: values => {
      mutate({ body: JSON.stringify(values) });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col justify-evenly h-full m-auto w-1/2 ">
      <FormField formik={formik} htmlFor="name" placeholder={strings.namePlaceholder} />
      <FormField formik={formik} type="email" htmlFor="email" placeholder={strings.emailPlaceholder} />
      <FormField formik={formik} type="password" htmlFor="password" placeholder={strings.passwordPlaceHolder} />
      <FormField formik={formik} type="password" htmlFor="validatePassword" placeholder={strings.validatePassword} />
      <div className="mr-auto">
        <LoadingButton isLoading={isLoading} />
      </div>
      {error && (
        <div className="mx-auto">
          <ErrorMessage error={error} />
        </div>
      )}
    </form>
  );
};

export default AdminForm;
