import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Customer from './customer';
import CustomerDetail from './customer-detail';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={CustomerDetail} />
      <ErrorBoundaryRoute path={match.url} component={Customer} />
    </Switch>
  </>
);

export default Routes;
