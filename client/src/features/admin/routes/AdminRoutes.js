import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import AdminNav from '../components/AdminNav/AdminNav';
import AddContentRoutes from './AddContentRoutes';
import ViewContentRoutes from './ViewContentRoutes';

const AdminRoutes = () => {
  const { path } = useRouteMatch();

  return (
    <div className="min-h-screen w-full">
      <AdminNav />
      <Switch>
        <Route exact path={`${path}`}>
          <Redirect to={`${path}/view/articles`} />
        </Route>
        <Route path={`${path}/add`}>
          <AddContentRoutes />
        </Route>
        <Route path={`${path}/view`}>
          <ViewContentRoutes />
        </Route>
      </Switch>
    </div>
  );
};

export default AdminRoutes;
