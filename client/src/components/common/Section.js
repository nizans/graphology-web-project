import { SectionHeightContext } from 'context/sectionHeightContext';
import React from 'react';
import { useContext } from 'react';

const Section = React.forwardRef(({ children, className, minHeight, addToDef = 0, style }, ref) => {
  const { windowHeight, headerHeight, breadCrumbHeight, footerHeight } = useContext(SectionHeightContext);
  let defaultMinHeight = windowHeight - headerHeight - breadCrumbHeight - footerHeight - addToDef;

  return (
    <section
      className={`w-full ${className ? className : ''}`}
      style={{
        minHeight: `${minHeight ? minHeight - 3 + 'px' : defaultMinHeight - 3 + 'px'}`,
        ...style,
      }}
      ref={ref}>
      {children}
    </section>
  );
});

export default Section;
