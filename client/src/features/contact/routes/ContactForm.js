import DropDownMenu from 'components/UI/DropDownMenu';
import ErrorMessage from 'components/UI/ErrorMessage';
import FormField from 'components/UI/FormField';
import LoadingButton from 'components/UI/LoadingButton';
import { useFormik } from 'formik';
import { useMutateData } from 'lib/reactQuery';
import React from 'react';
import * as Yup from 'yup';
import { contactApiRequests } from '../api';

const strings = {
  fullName: 'שם מלא',
  phoneNumber: 'מספר פלאפון',
  email: 'אימייל',
  notes: 'הערות',
  invalidEmail: 'כתובת אימייל לא תקינה',
  required: 'שדה דרוש',
  invalidPhone: 'מספר לא תקין',
  send: 'שלח',
  requestSubject: 'נושא פניה',
  requestSubjects: ['הזמנת ספר', 'ייעוץ עסקי', 'הרצאות', 'קורסים וסדנאות', 'ייעוץ אישי גרפולוגי', 'גרפולוגיה משפטית'],
  success: 'תודה, הפרטים התקבלו בהצלחה!',
};

const initialValues = { from: '', email: '', phone: '', notes: '', subject: '' };
const validation = {
  from: Yup.string().max(255).required(strings.required),
  email: Yup.string().max(255).required(strings.required).email(strings.invalidEmail),
  phone: Yup.string().required(strings.required).matches('^0(5[^7]|[2-4]|[8-9]|7[0-9])[0-9]{7}$', strings.invalidPhone),
  notes: Yup.string().max(255),
  subject: Yup.string().oneOf(strings.requestSubjects),
};
const ContactForm = () => {
  const { isLoading, error, isSuccess, mutate } = useMutateData(contactApiRequests.sendContactRequest);

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object(validation),
    onSubmit: values => {
      mutate({ body: JSON.stringify(values) });
    },
  });

  if (isSuccess) return <h1 className="p-16 _text-3xl m-auto text-center font-bold">{strings.success}</h1>;
  if (error) return <ErrorMessage error={error} />;

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col  items-center justify-around">
      <div className="grid sm:grid-cols-2 py-4 gap-x-24 w-full xl:px-28">
        <FormField
          className=" col-span-2 sm:col-span-1"
          formik={formik}
          htmlFor="from"
          placeholder={strings.fullName}
        />
        <FormField
          className=" col-span-2 sm:col-span-1"
          formik={formik}
          htmlFor="phone"
          placeholder={strings.phoneNumber}
        />
        <FormField className=" col-span-2 sm:col-span-1" formik={formik} htmlFor="email" placeholder={strings.email} />

        <div className="grid grid-rows-2 mx-4 relative col-span-2  sm:col-span-1 ">
          <DropDownMenu
            title={strings.requestSubject}
            handleChange={e => (formik.values.subject = e)}
            values={strings.requestSubjects}
          />
          <label htmlFor="requestSubject" className="_text-lg">
            {formik.touched.requestSubject && formik.errors.requestSubject && formik.errors.requestSubject}
          </label>
        </div>
        <FormField className=" col-span-2" formik={formik} htmlFor="notes" placeholder={strings.notes} />
      </div>

      <LoadingButton isLoading={isLoading} />
    </form>
  );
};

export default ContactForm;
