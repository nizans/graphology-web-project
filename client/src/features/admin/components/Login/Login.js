import ErrorMessage from 'components/UI/ErrorMessage';
import FormField from 'components/UI/FormField';
import LoadingButton from 'components/UI/LoadingButton';
import Spinner from 'components/UI/Spinner';
import { AuthContext } from 'context/AuthContext';
import { adminApiCRUDRequests } from 'features/admin';
import { useFormik } from 'formik';
import { useMutateData } from 'lib/reactQuery';
import React, { useContext, useEffect } from 'react';
import * as Yup from 'yup';

const strings = {
  required: 'שדה דרוש',
  invalidEmail: 'כתובת אימייל לא תקינה',
  passwordMinLenghth: 'הסיסמא צריכה להכיל לפחות 6 תוים',
  email: 'אימייל',
  password: 'סיסמא',
  login: 'התחבר',
  title: 'התחברות מנהל',
  forgotPassword: 'שחכתי סיסמא',
  successLogin: 'התחברת בהצלחה, מיד תועבר',
  passwordResetSuccess: 'הסיסמא אופסה בהצלחה, נשלח מייל עם הוראות להמשך',
};

const Login = () => {
  const { login, loginError, isLoginLoading, isLoginSuccess, resetLoginRequestState } = useContext(AuthContext);
  const {
    mutate: resetPassword,
    isLoading: isPasswordReseting,
    isSuccess: isPasswordResetSuccess,
    error: passwordResetError,
  } = useMutateData(adminApiCRUDRequests.resetPassword);
  useEffect(() => () => resetLoginRequestState(), []); // eslint-disable-line react-hooks/exhaustive-deps

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().required(strings.required).email(strings.invalidEmail),
      password: Yup.string().min(6, strings.passwordMinLenghth).required(strings.required),
    }),
    onSubmit: values => {
      login(values.email, values.password);
    },
  });

  const onPasswordReset = () => {
    resetPassword({ body: JSON.stringify({ email: formik.values.email }) });
  };

  return (
    <div className=" flex flex-col justify-center items-center border-p-gray-dark border-2 px-14 py-9 rounded-2xl pt-12">
      {isPasswordResetSuccess ? (
        <h1 className="_text-bold-3xl">{strings.passwordResetSuccess}</h1>
      ) : isPasswordReseting ? (
        <Spinner />
      ) : (
        <form onSubmit={formik.handleSubmit} className="w-full flex flex-col items-center">
          <h1 className="_text-bold-3xl pb-4">{strings.title}</h1>
          <FormField formik={formik} htmlFor="email" placeholder={strings.email} />
          <FormField formik={formik} htmlFor="password" type="password" placeholder={strings.password} />
          <div className="h-12 w-full flex justify-center items-center">
            <div className="flex flex-col justify-center items-center">
              <LoadingButton isLoading={isLoginLoading} />
              {!formik.errors.email && (
                <button onClick={onPasswordReset} to="/admin/resetPassword">
                  {strings.forgotPassword}
                </button>
              )}
            </div>
          </div>
        </form>
      )}
      <div className="h-10 mt-4">
        {(loginError || passwordResetError) && <ErrorMessage error={loginError || passwordResetError} />}
        {isLoginSuccess && strings.successLogin}
      </div>
    </div>
  );
};

export default Login;
