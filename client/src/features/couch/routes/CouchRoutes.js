import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Couch from '../components/Couch';
import CouchItemPage from '../components/CouchItemPage';

export const CouchRoutes = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${path}`}>
        <Couch />
      </Route>
      <Route path={`${path}/:id`}>
        <CouchItemPage />
      </Route>
    </Switch>
  );
};
