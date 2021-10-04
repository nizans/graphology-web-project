import { DimensionsContext } from 'context/DimensionsContext';
import React from 'react';
import { useContext } from 'react';

const Section = React.forwardRef(({ children, className, minHeight, maxHeight, addToDef = 0, style }, ref) => {
  const { windowHeight, headerHeight, breadCrumbHeight, footerHeight } = useContext(DimensionsContext);
  let defaultMinHeight = windowHeight - headerHeight - breadCrumbHeight - footerHeight - addToDef;

  return (
    <section
      className={`w-full ${className ? className : ''}`}
      style={{
        minHeight: minHeight ? minHeight : 'fit-content',
        maxHeight: maxHeight,
        ...style,
      }}
      ref={ref}
    >
      {children}
    </section>
  );
});

export default Section;
