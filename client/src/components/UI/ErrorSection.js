import Section from 'components/common/Section';
import React from 'react';
import { useHistory } from 'react-router';

const strings = {
  back: 'חזור אחורה',
  defaultErrorMessage: 'אירעה שגיאה',
};
const ErrorSection = props => {
  const { error } = props;

  const { goBack } = useHistory();

  return (
    <Section {...props} className={'flex justify-center items-center ' + props.className}>
      <div className="grid grid-cols-3 w-full">
        <button className="_text text-3xl m-auto hover:font-bold" onClick={goBack}>
          &lt; {strings.back}
        </button>
        <h1 className="_text text-5xl m-auto">{error?.message || strings.defaultErrorMessage}</h1>
      </div>
    </Section>
  );
};

export default ErrorSection;
