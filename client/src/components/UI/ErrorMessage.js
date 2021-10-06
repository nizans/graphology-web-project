import React from 'react';
const strings = { defaultErrorMessage: 'אירעה שגיאה' };
const ErrorMessage = props => {

  return (
    <h1 className="_text-lg text-red-500" {...props}>
      {props.error?.message || strings.defaultErrorMessage}
    </h1>
  );
};

export default ErrorMessage;
