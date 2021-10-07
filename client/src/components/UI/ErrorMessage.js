import React from 'react';
import { HEB_DEFAULT_ERROR_MESSAGE } from 'strings/common';
const ErrorMessage = props => {
  return (
    <h1 className="_text-lg text-red-500" {...props}>
      {props.error?.message || HEB_DEFAULT_ERROR_MESSAGE}
    </h1>
  );
};

export default ErrorMessage;
