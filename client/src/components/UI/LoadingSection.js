import Section from 'components/common/Section';
import { DimensionsContext } from 'context/DimensionsContext';
import React, { useContext } from 'react';
import Spinner from './Spinner';

const LoadingSection = () => {
  const { windowHeight, headerHeight, breadCrumbHeight, footerHeight } = useContext(DimensionsContext);

  return (
    <Section
      className="relative flex"
      style={{
        height: windowHeight - headerHeight - breadCrumbHeight - footerHeight - 85,
      }}
    >
      <Spinner style={{ justifyContent: 'center', alignItems: 'center' }} />
    </Section>
  );
};

export default LoadingSection;
