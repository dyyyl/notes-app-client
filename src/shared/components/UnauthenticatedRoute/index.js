import PropTypes from 'prop-types';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import handleQueryString from 'shared/libs/handleQueryString';

const UnauthenticatedRoute = ({
  authenticated,
  component: Component,
  path,
  setAuthenticated,
}) => {
  const redirect = handleQueryString('redirect');

  return (
    <Route path={path}>
      {!authenticated ? (
        <Component setAuthenticated={setAuthenticated} />
      ) : (
        <Redirect to={redirect === '' || redirect === null ? '/' : redirect} />
      )}
    </Route>
  );
};

UnauthenticatedRoute.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
  setAuthenticated: PropTypes.func.isRequired,
};

export default UnauthenticatedRoute;
