import React from 'react';

import NavigationContainer from './NavigationContainer';
import NavigationItem from './NavigationItem';
import NavigationSection from './NavigationSection';

const Navigation = () => (
  <NavigationContainer>
    <NavigationItem to="/">Hello Notes</NavigationItem>
    <NavigationSection>
      <NavigationItem to="/signup">Sign Up</NavigationItem>
      <NavigationItem to="/login">Login</NavigationItem>
    </NavigationSection>
  </NavigationContainer>
);

export default Navigation;
