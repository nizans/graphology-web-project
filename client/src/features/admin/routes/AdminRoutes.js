import Section from 'components/common/Section';
import { SectionHeightContext } from 'context/sectionHeightContext';
import React, { useContext } from 'react';
import { Route, Switch, useRouteMatch, Redirect } from 'react-router-dom';
import AddContentRoutes from './AddContentRoutes';
import AdminNav from '../components/AdminNav';
import ViewContentRoutes from './ViewContentRoutes';

const AdminRoutes = () => {
  const { path } = useRouteMatch();
  const sectionHeightCTX = useContext(SectionHeightContext);

  return (
    <div className="min-h-screen w-full">
      <AdminNav />
      <Switch>
        <Route exact path={`${path}`}>
          <Redirect to={`${path}/view/articles`} />
        </Route>
        <Route path={`${path}/add`}>
          <Section className="relative" minHeight={sectionHeightCTX.windowHeight - sectionHeightCTX.headerHeight - 30}>
            <AddContentRoutes />
          </Section>
        </Route>
        <Route path={`${path}/view`}>
          <ViewContentRoutes />
        </Route>
      </Switch>
    </div>
  );
};

export default AdminRoutes;
