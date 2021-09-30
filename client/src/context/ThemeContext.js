import React, { createContext } from 'react';
import detectMobileBrowser from 'utils/detectMobileBrowser';

export const ThemeContext = createContext({
  isMobile: false,
});

const ThemeContextProvider = ({ children }) => {
  const isMobile = detectMobileBrowser();
  return <ThemeContext.Provider value={{ isMobile }}>{children}</ThemeContext.Provider>;
};

export default ThemeContextProvider;
