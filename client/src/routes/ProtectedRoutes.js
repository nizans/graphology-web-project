import AdminRoutes from 'features/admin/routes/AdminRoutes';
import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';

const ProtectedRoutes = () => {
  const { path } = useRouteMatch();

  return (
    <>
      <Route path={`${path}`}>
        <AdminRoutes />
      </Route>
    </>
  );
};

export default ProtectedRoutes;
