import React from 'react';
import Spinner from './Spinner';

const strings = { loading: 'טוען', send: 'שלח' };

const LoadingButton = props => {
  const { isLoading, ...rest } = props;
  return (
    <button type="submit" className="button  relative" {...rest}>
      <span>{isLoading ? strings.loading : strings.send}</span>
      {isLoading && <Spinner size={30} speed={1} style={{ justifyContent: 'flex-end' }} />}
    </button>
  );
};

export default LoadingButton;
