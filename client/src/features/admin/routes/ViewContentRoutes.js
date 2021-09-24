import React from 'react';
import { Switch, useRouteMatch, Route, Redirect } from 'react-router-dom';
import AdminsTable from '../components/tables/AdminsTable';
import ArticlesTable from '../components/tables/ArticlesTable';
import BooksTable from '../components/tables/BooksTable';
import ContentsTable from '../components/tables/ContentTable';
import ServiceTable from '../components/tables/ServiceTable';
import VideosTable from '../components/tables/VideosTable';

const ViewContentRoutes = () => {
  const { path } = useRouteMatch();

  return (
    <>
      <Switch>
        <Route exact path={`${path}/articles`}>
          <ArticlesTable />
        </Route>
        <Route exact path={`${path}/contents`}>
          <ContentsTable />
        </Route>
        <Route exact path={`${path}/videos`}>
          <VideosTable />
        </Route>
        <Route exact path={`${path}/services`}>
          <ServiceTable />
        </Route>
        <Route exact path={`${path}/books`}>
          <BooksTable />
        </Route>
        <Route exact path={`${path}/admins`}>
          <AdminsTable />
        </Route>
        <Route exact path={`${path}`}>
          <Redirect from={`${path}`} to={`${path}/articles`} />
        </Route>
      </Switch>
    </>
  );
};

export default ViewContentRoutes;
