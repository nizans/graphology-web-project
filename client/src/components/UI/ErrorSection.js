import Section from 'components/common/Section';
import React from 'react';
import { useHistory } from 'react-router';
import { HEB_DEFAULT_ERROR_MESSAGE, HEB_GO_BACK } from 'strings/common';

const ErrorSection = props => {
  const { error } = props;

  const { goBack } = useHistory();

  return (
    <Section {...props} className={'flex justify-center items-center ' + props.className}>
      <div className="grid grid-cols-3 w-full">
        <button className="_text text-3xl m-auto hover:font-bold" onClick={goBack}>
          &lt; {HEB_GO_BACK}
        </button>
        <h1 className="_text text-5xl m-auto">{error?.message || HEB_DEFAULT_ERROR_MESSAGE}</h1>
      </div>
    </Section>
  );
};

export default ErrorSection;
