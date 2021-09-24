import Section from 'components/common/Section';
import React from 'react';
import { useHistory } from 'react-router';

const strings = {
  back: 'חזור אחורה',
};
const ErrorSection = props => {
  const { error } = props;

  const { goBack } = useHistory();

  return (
    <Section {...props} className="flex justify-center items-center">
      <div className="grid grid-cols-3 w-full">
        <button className="_text-3xl m-auto hover:font-bold" onClick={goBack}>
          &lt; {strings.back}
        </button>
        <h1 className="_text-5xl m-auto">{error.message}</h1>
      </div>
    </Section>
  );
};

export default ErrorSection;
