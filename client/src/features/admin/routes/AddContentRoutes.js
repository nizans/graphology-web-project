import { articlesApiCRUDRequests } from 'features/articles';
import { booksApiCRUDRequests } from 'features/books';
import { contentsApiCRUDRequests } from 'features/couch';
import { servicesApiCRUDRequests } from 'features/services';
import { videosApiCRUDRequests } from 'features/videos/api';
import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router';
import AdminForm from '../components/forms/AdminForm';
import ArticleForm from '../components/forms/ArticleForm';
import BookForm from '../components/forms/BookForm';
import CouchForm from '../components/forms/CouchForm';
import ServiceForm from '../components/forms/ServiceForm';
import VideoForm from '../components/forms/VideoForm';
import withData from '../components/forms/withData';

const AddContentRoutes = () => {
  const { path } = useRouteMatch();
  const WithDataArticleForm = withData(ArticleForm, articlesApiCRUDRequests);
  const WithDataCouchForm = withData(CouchForm, contentsApiCRUDRequests);
  const WithDataVideoForm = withData(VideoForm, videosApiCRUDRequests);
  const WithDataServiceForm = withData(ServiceForm, servicesApiCRUDRequests);
  const WithDataBookForm = withData(BookForm, booksApiCRUDRequests);
  return (
    <>
      <div className="mt-4 flex h-full w-full items-center pb-4 flex-wrap absolute top-0 bottom-0 right-0 left-0">
        <Switch>
          <Route exact path={`${path}/articles`}>
            <ArticleForm />
          </Route>
          <Route exact path={`${path}/contents`}>
            <CouchForm />
          </Route>
          <Route exact path={`${path}/videos`}>
            <VideoForm />
          </Route>
          <Route exact path={`${path}/services`}>
            <ServiceForm />
          </Route>
          <Route exact path={`${path}/books`}>
            <BookForm />
          </Route>
          <Route exact path={`${path}/admins`}>
            <AdminForm />
          </Route>
          <Route exact path={`${path}/articles/:id`}>
            <WithDataArticleForm />
          </Route>
          <Route exact path={`${path}/contents/:id`}>
            <WithDataCouchForm />
          </Route>
          <Route exact path={`${path}/videos/:id`}>
            <WithDataVideoForm />
          </Route>
          <Route exact path={`${path}/services/:id`}>
            <WithDataServiceForm />
          </Route>
          <Route exact path={`${path}/books/:id`}>
            <WithDataBookForm />
          </Route>
          <Route exact path={`${path}`}>
            <Redirect from={`${path}`} to={`${path}/articles`} />
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default AddContentRoutes;
