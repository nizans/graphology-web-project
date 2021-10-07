import React from 'react';
import { HEB_LOADING, HEB_SEND } from 'strings/common';
import Spinner from './Spinner';

const LoadingButton = props => {
  const { isLoading, value = HEB_SEND, ...rest } = props;
  return (
    <button type="submit" className="button flex items-center justify-between" {...rest}>
      <span>{isLoading ? HEB_LOADING : value || HEB_SEND}</span>
      {isLoading && <Spinner className="mr-4" size={25} fill="#FFFFFF" speed={1} />}
    </button>
  );
};

export default LoadingButton;
