import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import ArticlePage from '../components/ArticlePage';
import { Articles } from '../components/Articles';

const ArticlesRoutes = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path}>
        <Articles />
      </Route>
      <Route exact path={path + '/:id'}>
        <ArticlePage />
      </Route>
    </Switch>
  );
};

export default ArticlesRoutes;
