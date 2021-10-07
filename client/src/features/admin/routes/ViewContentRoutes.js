import React from 'react';
import { Switch, useRouteMatch, Route, Redirect } from 'react-router-dom';

import AdminsTable from '../components/view/AdminsTable';
import ArticlesTable from '../components/view/ArticlesTable';
import BooksTable from '../components/view/BooksTable';
import Certifications from '../components/view/Certifications/Certifications';
import ContentsTable from '../components/view/ContentsTable';
import RecommendationsView from '../components/view/Recommendation/RecommendationsView';
import ServicesTable from '../components/view/ServicesTable';
import VideosTable from '../components/view/VideosTable';

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
          <ServicesTable />
        </Route>
        <Route exact path={`${path}/books`}>
          <BooksTable />
        </Route>
        <Route exact path={`${path}/admins`}>
          <AdminsTable />
        </Route>
        <Route exact path={`${path}/certifications`}>
          <Certifications />
        </Route>
        <Route exact path={`${path}/recommendations`}>
          <RecommendationsView />
        </Route>
        <Route exact path={`${path}`}>
          <Redirect from={`${path}`} to={`${path}/articles`} />
        </Route>
      </Switch>
    </>
  );
};

export default ViewContentRoutes;
