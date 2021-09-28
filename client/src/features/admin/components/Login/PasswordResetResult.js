import React from 'react';
const strings = { passwordResetSuccess: 'נשלח מייל עם הוראות להמשך', backToLogin: 'חזרה' };
const PasswordResetResult = ({ resetPasswordMutation }) => {
  return (
    <div className="text-center">
      <h1 className="_text-bold-3xl">{strings.passwordResetSuccess}</h1>
      <button onClick={resetPasswordMutation} className="_text-bold-xl" to="/admin/login">
        &lt;{strings.backToLogin}
      </button>
    </div>
  );
};

export default PasswordResetResult;
