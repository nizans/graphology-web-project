import React from 'react';

const ErrorMessage = props => {
  const { message } = props.error;

  return (
    <h1 className="_text-lg text-red-500" {...props}>
      {message}
    </h1>
  );
};

export default ErrorMessage;
