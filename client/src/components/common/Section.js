import { DimensionsContext } from 'context/DimensionsContext';
import React, { useContext } from 'react';

const Section = React.forwardRef(
  ({ children, className, style, setDefaultHeight, setDefaultMinHeight, setDefaultMaxHeight }, ref) => {
    const { windowHeight, headerHeight, footerHeight, breadCrumbHeight } = useContext(DimensionsContext);

    return (
      <section
        className={`w-full ${className ? className : ''}`}
        style={{
          minHeight: setDefaultMinHeight
            ? windowHeight - headerHeight - footerHeight - breadCrumbHeight
            : 'fit-content',
          maxHeight: setDefaultMaxHeight ? windowHeight - headerHeight - footerHeight - breadCrumbHeight : null,
          height: setDefaultHeight ? windowHeight - headerHeight - footerHeight - breadCrumbHeight : null,
          ...style,
        }}
        ref={ref}
      >
        {children}
      </section>
    );
  }
);

export default Section;
