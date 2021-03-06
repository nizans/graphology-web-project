import Footer from 'components/footer/Footer';
import Header from 'components/header/Header';
import LoadingSection from 'components/UI/LoadingSection';
import { AuthContext } from 'context/AuthContext';
import Login from 'features/admin/components/Login/Login';
import React, { useContext } from 'react';
import { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import PublicRoutes from './PublicRoutes';
const ProtectedRoutes = React.lazy(() => import('./ProtectedRoutes'));

const AppRoutes = () => {
  const { isAuth, isRefreshing } = useContext(AuthContext);

  return (
    <Switch>
      <Route path="/home">
        <Header />
        <PublicRoutes />
        <Footer />
      </Route>

      <Route exact path="/admin/login">
        {isRefreshing ? <LoadingSection /> : isAuth ? <Redirect to="/admin" /> : <Login />}
      </Route>

      <Route path="/admin">
        {isAuth ? (
          <Suspense fallback={<LoadingSection />}>
            <ProtectedRoutes />
          </Suspense>
        ) : (
          <Redirect to="/admin/login" />
        )}
      </Route>

      <Redirect from="*" to="/home" />
    </Switch>
  );
};

export default AppRoutes;
