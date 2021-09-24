import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import OrderBook from '../components/OrderBook';
import Books from '../components/Books';

export const BooksRoutes = () => {
  const { path } = useRouteMatch();

  return (
    <>
      <Route exact path={`${path}`}>
        <Books />
      </Route>
      <Route path={`${path}/:id`}>
        <OrderBook />
      </Route>
    </>
  );
};
