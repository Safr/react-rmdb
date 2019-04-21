import * as React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
// COMPONENTS
// eslint-disable-next-line import/no-unresolved
import { MainRoute } from 'components/Layout/RouteTemplates';

import {
  NotFound,
  Login,
  // Main
  ComingSoon,
  Discover,
  Popular,
  TopRated,
  SearchResults,
  // eslint-disable-next-line import/no-unresolved
} from './routes';

// EXPORTED ROUTES
const Routes = () => (
  <Switch>
    <MainRoute exact path="/login" component={Login} />
    <MainRoute exact path="/coming-soon" component={ComingSoon} />
    <MainRoute exact path="/" component={Discover} />
    <MainRoute exact path="/popular" component={Popular} />
    <MainRoute exact path="/top-rated" component={TopRated} />
    <MainRoute path="/search" component={SearchResults} />
    {/* <Redirect exact from="/" to="/dashboard" /> */}
    <Route path="/404" component={NotFound} />
    <Redirect to="/404" />
  </Switch>
);

export default Routes;
