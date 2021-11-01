import { authAPIRequests } from 'features/admin';
import useLocalStorage from 'hooks/useLocalStorage';
import { useMutateData } from 'lib/reactQuery';
import React, { createContext, useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router';

export const AuthContext = createContext({
  isAuth: false,
  user: false,
  login: (email, password) => {},
  logout: () => {},
  isLoginSuccess: false,
  loginError: null,
  isLoginLoading: false,
  isLoggingOutLoading: false,
  isRefreshing: false,
  resetLoginRequestState: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const {
    mutateAsync: loginRequest,
    isLoading: isLoginLoading,
    error: loginError,
    isSuccess: isLoginSuccess,
    reset: resetLoginRequestState,
  } = useMutateData(authAPIRequests.login);

  const {
    mutateAsync: refreshRequest,
    isLoading: isRefreshing,
    error: refreshError,
  } = useMutateData(authAPIRequests.refresh);

  const { mutateAsync: logoutRequest, isLoading: isLoggingOutLoading } = useMutateData(authAPIRequests.logout);

  const { mutateAsync: renewRequest } = useMutateData(authAPIRequests.renew);

  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState();
  const [refreshToken, setRefreshToken, clearRefreshToken] = useLocalStorage('refreshToken', false);

  const history = useHistory();

  const login = async (email, password) => {
    const result = await loginRequest({ body: JSON.stringify({ email, password }) });
    setRefreshToken(result.refreshToken);
    setUser({ name: result.name, email: result.email });
    setIsAuth(true);
  };

  const logout = async () => {
    const body = JSON.stringify({ refreshToken: refreshToken, email: user.email, name: user.name });
    logoutRequest({ body: body });
    clearRefreshToken();
    setUser(false);
    setIsAuth(false);
  };

  const refresh = async () => {
    const body = JSON.stringify({ refreshToken: refreshToken });
    try {
      const { email, name } = await refreshRequest({ body });
      setUser({ email, name });
      setIsAuth(true);
    } catch (error) {
      setUser(null);
      setIsAuth(false);
    }
  };

  const renew = async () => {
    if (process.env.NODE_ENV !== 'development') await renewRequest({});
  };

  /**
   * This is for keeping the cookie age short with auto-renews and preventing browsing inside admin routes with an expired cookie.
   * The cookie will be checked and replaced every route (nested in 'admin') change, or a protected request was sent (POST, DELETE, PUT...)
   * If and error was thrown, set user and isAuth to false and logout on client side
   * */
  useEffect(() => {
    history.listen((listen, action) => {
      if (listen.pathname.includes('admin') && !listen.pathname.includes('login') && action !== 'REPLACE') {
        renew();
      }
    });
  }, [refresh, refreshToken]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        user,
        isRefreshing,
        login,
        logout,
        resetLoginRequestState,
        isLoginSuccess,
        isLoggingOutLoading,
        loginError,
        isLoginLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
