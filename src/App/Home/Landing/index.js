import React from 'react';

import Heading from 'shared/components/Heading';
import Subheading from 'shared/components/Subheading';

import LandingLayout from './LandingLayout';

const Landing = () => (
  <LandingLayout>
    <Heading style={{ marginBottom: '0.5rem' }}>Hello Notes</Heading>
    <Subheading>A simple note taking app</Subheading>
  </LandingLayout>
);

export default Landing;
