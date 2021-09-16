import ErrorMessage from 'components/UI/ErrorMessage';
import FormField from 'components/UI/FormField';
import LoadingButton from 'components/UI/LoadingButton';
import { contactApiRequests } from 'features/contact/api';
import { useFormik } from 'formik';
import useWindowDimensions from 'hooks/useWindowDimensions';
import { useMutateData } from 'lib/reactQuery';
import React from 'react';
import * as Yup from 'yup';

const strings = {
  title: 'הזמנת ספר',
  subtitle: 'מלאו את הטופס וניצור איתכם קשר .לסגירת פרטים אחרונים',
  fullName: 'שם מלא',
  phoneNumber: 'מספר פלאפון',
  email: 'אימייל',
  order: 'הזמן',
  notes: 'הערות',
  invalidEmail: 'כתובת אימייל לא תקינה',
  required: 'שדה דרוש',
  invalidPhone: 'מספר לא תקין',
};

const OrderBookForm = ({ book }) => {
  const { isLoading, error, mutate } = useMutateData(contactApiRequests.orderBook);
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      notes: '',
      book: { id: book._id, title: book.title, url: window.location.href },
    },
    validationSchema: Yup.object({
      name: Yup.string().max(255).required(strings.required),
      email: Yup.string().max(255).required(strings.required).email(strings.invalidEmail),
      phone: Yup.string()
        .required(strings.required)
        .matches('^0(5[^7]|[2-4]|[8-9]|7[0-9])[0-9]{7}$', strings.invalidPhone),
      notes: Yup.string().max(255),
    }),
    onSubmit: values => {
      mutate({ body: JSON.stringify(values) });
    },
  });
  if (error) return <ErrorMessage error={error} />;
  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col justify-evenly h-full w-full">
      <h1 className="_text-bold-dark-6xl mr-4">{strings.title}</h1>
      <h3 className="_text-3xl mr-4">{strings.subtitle}</h3>
      <div className="grid sm:grid-cols-2">
        <FormField borderWidth="2" formik={formik} htmlFor="name" placeholder={strings.fullName} />
        <FormField borderWidth="2" formik={formik} htmlFor="phone" placeholder={strings.phoneNumber} />
      </div>
      <FormField borderWidth="2" formik={formik} htmlFor="email" placeholder={strings.email} />
      <FormField borderWidth="2" formik={formik} htmlFor="notes" placeholder={strings.notes} />
      <LoadingButton isLoading={isLoading} />
    </form>
  );
};

export default OrderBookForm;
