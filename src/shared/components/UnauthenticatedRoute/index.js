import PropTypes from 'prop-types';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import handleQueryString from 'shared/libs/handleQueryString';

const UnauthenticatedRoute = ({
  authenticated,
  setAuthenticated,
  component: Component,
  ...rest
}) => {
  const redirect = handleQueryString('redirect');

  return (
    <Route
      {...rest}
      render={
        // eslint-disable-next-line
        (props) =>
          !authenticated ? ( // eslint-disable-line
            <Component
              params={props.match.params}
              setAuthenticated={setAuthenticated}
            />
          ) : (
            <Redirect
              to={redirect === '' || redirect === null ? '/' : redirect}
            />
          )
      }
    />
  );
};

UnauthenticatedRoute.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
  match: PropTypes.object,
  setAuthenticated: PropTypes.func.isRequired,
};

UnauthenticatedRoute.defaultProps = {
  match: {},
};

export default UnauthenticatedRoute;
