import ErrorMessage from 'components/UI/ErrorMessage';
import FormField from 'components/UI/FormField';
import LoadingButton from 'components/UI/LoadingButton';
import { AuthContext } from 'context/AuthContext';
import { adminApiCRUDRequests } from 'features/admin';
import { useFormik } from 'formik';
import { useMutateData } from 'lib/reactQuery';
import React, { useContext, useEffect } from 'react';
import * as Yup from 'yup';
import { LoginStrings as strings } from './Login.strings';
import PasswordResetResult from './PasswordResetResult';

const Login = () => {
  const { login, loginError, isLoginLoading, isLoginSuccess, resetLoginRequestState } = useContext(AuthContext);
  const {
    mutate: resetPassword,
    isLoading: isPasswordReseting,
    isSuccess: isPasswordResetSuccess,
    error: passwordResetError,
    reset: resetPasswordMutation,
  } = useMutateData(adminApiCRUDRequests.resetPassword);
  useEffect(() => () => resetLoginRequestState(), []); // eslint-disable-line react-hooks/exhaustive-deps

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().required(strings.required).email(strings.invalidEmail),
      password: Yup.string()
        .min(6, strings.passwordMinLength)
        .max(12, strings.passwordMaxLength)
        .required(strings.required),
    }),
    onSubmit: values => {
      login(values.email, values.password);
    },
  });

  const onPasswordReset = () => {
    resetPassword({ body: JSON.stringify({ email: formik.values.email }) });
  };

  if (isPasswordResetSuccess) return <PasswordResetResult resetPasswordMutation={resetPasswordMutation} />;

  return (
    <div className=" flex flex-col justify-center items-center border-p-gray-dark border-2 px-14 py-9 rounded-2xl pt-12">
      <form onSubmit={formik.handleSubmit} className="w-full flex flex-col items-center">
        <h1 className="_text text-3xl pb-4">{strings.title}</h1>
        <FormField formik={formik} htmlFor="email" placeholder={strings.email} />
        <FormField formik={formik} htmlFor="password" type="password" placeholder={strings.password} />
        <div className="h-12 w-full flex justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <LoadingButton isLoading={isLoginLoading || isPasswordReseting} />
            {!formik.errors.email && (
              <button type="button" onClick={onPasswordReset} to="/admin/resetPassword">
                {strings.forgotPassword}
              </button>
            )}
          </div>
        </div>
      </form>
      <div className="h-10 mt-4">
        {(loginError || passwordResetError) && <ErrorMessage error={loginError || passwordResetError} />}
        {isLoginSuccess && strings.successLogin}
      </div>
    </div>
  );
};

export default Login;
