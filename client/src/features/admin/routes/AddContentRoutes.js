import { articlesApiCRUDRequests } from 'features/articles';
import { booksApiCRUDRequests } from 'features/books';
import { contentsApiCRUDRequests } from 'features/couch';
import { servicesApiCRUDRequests } from 'features/services';
import { videosApiCRUDRequests } from 'features/videos/api';

import ArticleForm from '../components/forms/ArticleForm';
import BookForm from '../components/forms/BookForm';
import CouchForm from '../components/forms/CouchForm';
import ServiceForm from '../components/forms/ServiceForm';
import VideoForm from '../components/forms/VideoForm';
import withData from '../components/forms/withData';
import AdminForm from '../components/forms/AdminForm';

import React from 'react';

import { Redirect, Route, Switch, useRouteMatch } from 'react-router';
import { adminApiCRUDRequests } from '..';
import RecommendationForm from '../components/forms/RecommendationForm';
import { recommendationApiCRUDRequests } from 'features/recommendations';
import Section from 'components/common/Section';

const AddContentRoutes = () => {
  const { path } = useRouteMatch();
  const WithDataArticleForm = withData(ArticleForm, articlesApiCRUDRequests);
  const WithDataCouchForm = withData(CouchForm, contentsApiCRUDRequests);
  const WithDataVideoForm = withData(VideoForm, videosApiCRUDRequests);
  const WithDataServiceForm = withData(ServiceForm, servicesApiCRUDRequests);
  const WithDataBookForm = withData(BookForm, booksApiCRUDRequests);
  const WithDataAdminForm = withData(AdminForm, adminApiCRUDRequests);
  const WithDataRecommendationForm = withData(RecommendationForm, recommendationApiCRUDRequests);
  return (
    <Section setDefaultHeight={true} className="w-full h-full">
      <Switch>
        <Route exact path={`${path}/articles`}>
          <ArticleForm />
        </Route>
        <Route exact path={`${path}/articles/:id`}>
          <WithDataArticleForm />
        </Route>

        <Route exact path={`${path}/contents`}>
          <CouchForm />
        </Route>
        <Route exact path={`${path}/contents/:id`}>
          <WithDataCouchForm />
        </Route>

        <Route exact path={`${path}/videos`}>
          <VideoForm />
        </Route>
        <Route exact path={`${path}/videos/:id`}>
          <WithDataVideoForm />
        </Route>

        <Route exact path={`${path}/services`}>
          <ServiceForm />
        </Route>
        <Route exact path={`${path}/services/:id`}>
          <WithDataServiceForm />
        </Route>

        <Route exact path={`${path}/books`}>
          <BookForm />
        </Route>
        <Route exact path={`${path}/books/:id`}>
          <WithDataBookForm />
        </Route>

        <Route exact path={`${path}/admins`}>
          <AdminForm />
        </Route>
        <Route exact path={`${path}/admins/:id`}>
          <WithDataAdminForm />
        </Route>

        <Route exact path={`${path}/recommendations`}>
          <RecommendationForm />
        </Route>
        <Route exact path={`${path}/recommendations/:id`}>
          <WithDataRecommendationForm />
        </Route>

        <Route exact path={`${path}`}>
          <Redirect from={`${path}`} to={`${path}/articles`} />
        </Route>
      </Switch>
    </Section>
  );
};

export default AddContentRoutes;
