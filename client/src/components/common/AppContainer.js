import { AuthContext } from 'context/authContext';
import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';

const strings = {
  admin: 'ניהול',
  connected: 'מחובר בתור מנהל',
};
const AppContainer = ({ children }) => {
  const { isAuth } = useContext(AuthContext);
  const { location } = useHistory();
  return (
    <div className="bg-background w-full flex justify-center relative min-h-screen overflow-hidden">
      <div
        dir="rtl"
        className="px-8 md:px-0 flex flex-col justify-center items-center relative w-screen  md:container min-h-screen ">
        {children}
      </div>
      {!location.pathname.includes('admin') && (
        <NavLink to="/admin/login" className="absolute bottom-0 right-0 _text-lg">
          {isAuth ? strings.connected : strings.admin}
        </NavLink>
      )}
    </div>
  );
};

export default AppContainer;
