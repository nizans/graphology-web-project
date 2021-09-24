import Section from 'components/common/Section';
import React from 'react';
import Spinner from './Spinner';

const LoadingSection = () => {
  return (
    <Section className="relative">
      <Spinner style={{ justifyContent: 'center' }} />
    </Section>
  );
};

export default LoadingSection;
