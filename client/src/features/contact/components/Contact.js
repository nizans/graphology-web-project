import React, { useContext } from 'react';
import Section from 'components/common/Section';
import { DimensionsContext } from 'context/DimensionsContext';

import ContactForm from './ContactForm';
import { ContactStrings as strings } from './Contact.strings';

export const Contact = () => {
  const { windowHeight, footerHeight, headerHeight, breadCrumbHeight } = useContext(DimensionsContext);

  return (
    <Section minHeight={windowHeight - footerHeight - headerHeight - breadCrumbHeight}>
      <div className="flex flex-col justify-evenly items-center">
        <h1 className="font-bold text-7xl text-p-blue-dark py-4">{strings.title}</h1>
        <h3 className="text-p-blue text-3xl py-4 text-center">{strings.subtitle}</h3>
      </div>
      <div className="w-full">
        <ContactForm />
      </div>
    </Section>
  );
};
