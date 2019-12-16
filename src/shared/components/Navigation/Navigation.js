import { Auth } from 'aws-amplify';
import PropTypes from 'prop-types';
import React from 'react';

import NavigationContainer from './NavigationContainer';
import NavigationItem from './NavigationItem';
import NavigationSection from './NavigationSection';

const Navigation = ({ authenticated, setAuthenticated }) => {
  const handleLogout = async () => {
    await Auth.signOut();
    setAuthenticated(false);
  };

  return (
    <NavigationContainer>
      <NavigationItem style={{ fontSize: '3rem' }} to="/">
        Hello Notes
      </NavigationItem>
      {authenticated ? (
        <NavigationItem to="/" onClick={handleLogout}>
          Logout
        </NavigationItem>
      ) : (
        <NavigationSection>
          <NavigationItem to="/login">Login</NavigationItem>
          <NavigationItem to="/signup">
            Sign up <span style={{ fontFamily: 'Arial' }}>→</span>
          </NavigationItem>
        </NavigationSection>
      )}
    </NavigationContainer>
  );
};

Navigation.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  setAuthenticated: PropTypes.func.isRequired,
};

export default Navigation;
