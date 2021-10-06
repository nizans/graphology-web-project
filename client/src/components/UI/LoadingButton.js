import React from 'react';
import Spinner from './Spinner';

const strings = { loading: 'טוען', send: 'שלח' };

const LoadingButton = props => {
  const { isLoading, value = strings.send, ...rest } = props;
  return (
    <button type="submit" className="button flex items-center justify-between" {...rest}>
      <span>{isLoading ? strings.loading : value || strings.send}</span>
      {isLoading && <Spinner className="mr-4" size={25} fill="#FFFFFF" speed={1} />}
    </button>
  );
};

export default LoadingButton;
