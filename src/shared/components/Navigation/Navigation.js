import { Auth } from 'aws-amplify';
import PropTypes from 'prop-types';
import React from 'react';
import useMedia from 'use-media';

import NavigationContainer from './NavigationContainer';
import NavigationItem from './NavigationItem';
import NavigationSection from './NavigationSection';

const Navigation = ({ authenticated, setAuthenticated }) => {
  const handleLogout = async () => {
    await Auth.signOut();
    setAuthenticated(false);
  };

  const isMobile = useMedia({ maxWidth: '450px' });

  return (
    <NavigationContainer>
      <NavigationItem style={{ fontSize: '3rem' }} to="/">
        {isMobile ? 'HN' : 'Hello Notes'}
      </NavigationItem>
      {authenticated ? (
        <NavigationSection>
          <NavigationItem to="/settings">Settings</NavigationItem>
          <NavigationItem to="/" onClick={handleLogout}>
            Logout
          </NavigationItem>
        </NavigationSection>
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
