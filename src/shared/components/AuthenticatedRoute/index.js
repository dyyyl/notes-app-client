import PropTypes from 'prop-types';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const AuthenticatedRoute = ({ authenticated, component: Component, path }) => (
  <Route
    path={path}
    render={
      // eslint-disable-next-line
      (props) =>
        authenticated ? ( // eslint-disable-line
          <Component params={props.match.params} />
        ) : (
          <Redirect
            to={`/login?redirect=${props.location.pathname}${props.location.search}`}
          />
        )
    }
  />
);

AuthenticatedRoute.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
  location: PropTypes.object,
  match: PropTypes.object,
  path: PropTypes.string.isRequired,
};

AuthenticatedRoute.defaultProps = {
  location: {},
  match: {},
};

export default AuthenticatedRoute;
