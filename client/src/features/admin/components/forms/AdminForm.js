import ErrorMessage from 'components/UI/ErrorMessage';
import FormField from 'components/UI/FormField';
import LoadingButton from 'components/UI/LoadingButton';
import ShowPasswordIcon from 'components/UI/ShowPasswordIcon';
import { adminApiCRUDRequests } from 'features/admin';
import { useFormik } from 'formik';
import { useMutateData } from 'lib/reactQuery';
import React, { useState } from 'react';
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
  success: 'תודה, הפרטים התקבלו בהצלחה!',
  defineUser: 'הגדרת מיילים למשתמש זה:',
  bookOrderMail: 'שלח מיילים לגבי הזמנת ספרים',
  contactUsMail: 'שלח מיילים לגבי בקשות ליצירת קשר',
  nameMaxLength: 'שם יכול להכיל עד 50 תווים',
  invalidPassword: 'סיסמא יכולה להכיל רק אותיות באנגלית, מספרים, ותווים',
};

const AdminForm = ({ data: admin }) => {
  const { mutate, isLoading, error, isSuccess } = useMutateData(
    admin ? adminApiCRUDRequests.update : adminApiCRUDRequests.create
  );
  const [showPassword, setShowPassword] = useState(false);
  const initialValues = {
    name: admin?.name || '',
    email: admin?.email || '',
    mailPermissions: admin?.mailPermissions || ['bookOrders', 'contactRequests'],
    password: '',
    validatePassword: '',
  };

  const validation = Yup.object({
    email: Yup.string().required(strings.required).email(strings.invalidEmail),
    name: Yup.string().required(strings.required).max(50, strings.nameMaxLength),
    password: Yup.string()
      .required(strings.required)
      .min(6, strings.minLength)
      .matches(`^[a-zA-Z0-9!@#$%^&*()-+_{}[]|\`~]+$`, {
        excludeEmptyString: true,
        message: strings.invalidPassword,
      }),
    validatePassword: Yup.string()
      .required(strings.required)
      .oneOf([Yup.ref('password'), null], strings.passwordMustMatch),
  });
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validation,
    onSubmit: values => {
      mutate({ uri: admin?._id, body: JSON.stringify(values) });
    },
  });

  const togglePasswordShow = () => {
    setShowPassword(!showPassword);
  };

  const handleCheckeboxCheck = async (e, name) => {
    if (e.target.checked) await formik.setFieldValue('mailPermissions', [...formik.values.mailPermissions, name]);
    else
      await formik.setFieldValue(
        'mailPermissions',
        formik.values.mailPermissions.filter(p => p !== name)
      );
  };

  if (isSuccess) return <h1 className="p-16 _text-3xl m-auto text-center font-bold">{strings.success}</h1>;

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col justify-evenly h-full w-full">
      <div className="flex  divide-x-2 divide-p-brown divide-x-reverse">
        <div className="w-full px-4 my-4">
          <FormField topLabel={strings.name} formik={formik} htmlFor="name" placeholder={strings.namePlaceholder} />
          <FormField
            topLabel={strings.email}
            formik={formik}
            type="email"
            htmlFor="email"
            placeholder={strings.emailPlaceholder}
          />
          <FormField
            topLabel={strings.password}
            formik={formik}
            type={showPassword ? 'text' : 'password'}
            htmlFor="password"
            placeholder={strings.passwordPlaceHolder}
            icon={<ShowPasswordIcon onClick={togglePasswordShow} show={showPassword} />}
          />
          <FormField
            topLabel={strings.validatePassword}
            formik={formik}
            type={showPassword ? 'text' : 'password'}
            htmlFor="validatePassword"
            placeholder={strings.validatePassword}
            icon={<ShowPasswordIcon onClick={togglePasswordShow} show={showPassword} />}
          />
        </div>
        <div className="w-full px-4 my-4 _text-xl">
          <h1 className="_text-3xl">{strings.defineUser}</h1>
          <ul className="mr-2">
            <li className="my-4">
              <input
                type="checkbox"
                id="bookOrders"
                name="bookOrders"
                className="cursor-pointer transform scale-150"
                checked={formik.values.mailPermissions.includes('bookOrders')}
                onChange={e => handleCheckeboxCheck(e, 'bookOrders')}
              />
              <label className="mr-4" htmlFor="bookOrders">
                {strings.bookOrderMail}
              </label>
            </li>
            <li className="my-4">
              <input
                type="checkbox"
                id="contactRequests"
                name="contactRequests"
                className="cursor-pointer transform scale-150"
                checked={formik.values.mailPermissions.includes('contactRequests')}
                onChange={e => handleCheckeboxCheck(e, 'contactRequests')}
              />
              <label className="mr-4" htmlFor="contactRequests">
                {strings.contactUsMail}
              </label>
            </li>
          </ul>
        </div>
      </div>

      <div className="m-auto">
        <LoadingButton isLoading={isLoading} />
        {error && (
          <label>
            <ErrorMessage error={error} />
          </label>
        )}
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
