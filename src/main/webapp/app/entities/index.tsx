import React from 'react';
import { Switch } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Customer from './customer';
import Blog from './blog';
import Entry from './entry';
import Tag from './tag';
/* jhipster-needle-add-route-import - JHipster will add routes here */

const Routes = ({ match }) => (
  <div>
    <Switch>
      {/* prettier-ignore */}
      <ErrorBoundaryRoute path={`${match.url}customer`} component={Customer} />
      <ErrorBoundaryRoute path={`${match.url}blog`} component={Blog} />
      <ErrorBoundaryRoute path={`${match.url}entry`} component={Entry} />
      <ErrorBoundaryRoute path={`${match.url}tag`} component={Tag} />
      {/* jhipster-needle-add-route-path - JHipster will add routes here */}
    </Switch>
  </div>
);

export default Routes;
