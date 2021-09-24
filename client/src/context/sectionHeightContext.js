import useWindowDimensions from 'hooks/useWindowDimensions';
import React, { useState, createContext } from 'react';

export const SectionHeightContext = createContext({
  windowHeight: 0,
  windowWidth: 0,
  headerHeight: 0,
  footerHeight: 0,
  breadCrumbHeight: 0,
  setHeaderHeight: height => {},
  setFooterHeight: height => {},
  setBreadCrumbHeight: height => {},
});

export const SectionHeightProvider = ({ children }) => {
  const [footerHeight, setFooterHeight] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [breadCrumbHeight, setBreadCrumbHeight] = useState(0);
  const windowDimensions = useWindowDimensions();

  const handleHeaderSizeChange = height => {
    setHeaderHeight(height);
  };
  const handleFooterSizeChange = height => {
    setFooterHeight(height);
  };
  const handleBreadCrumbSizeChange = height => {
    setBreadCrumbHeight(height);
  };

  return (
    <SectionHeightContext.Provider
      value={{
        windowHeight: windowDimensions.height,
        windowWidth: windowDimensions.width,
        footerHeight: footerHeight,
        headerHeight: headerHeight,
        breadCrumbHeight: breadCrumbHeight,
        setBreadCrumbHeight: handleBreadCrumbSizeChange,
        setHeaderHeight: handleHeaderSizeChange,
        setFooterHeight: handleFooterSizeChange,
      }}>
      {children}
    </SectionHeightContext.Provider>
  );
};
