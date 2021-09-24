import React, { useState } from 'react';

export const BreadCrumbsTitleContext = React.createContext({
  id: '',
  title: '',
  setTitle: (id, title) => {},
});

export const BreadCrumbsTitleProvider = ({ children }) => {
  const [breadCrumbTitle, setBreadCrumbTitle] = useState({
    id: '',
    title: '',
  });

  const handleSetTitle = (id, title) => {
    setBreadCrumbTitle({ id: id, title: title });
  };

  return (
    <BreadCrumbsTitleContext.Provider
      value={{ title: breadCrumbTitle.title, id: breadCrumbTitle.id, setTitle: handleSetTitle }}>
      {children}
    </BreadCrumbsTitleContext.Provider>
  );
};
