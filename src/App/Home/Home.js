import React from 'react';

import Heading from 'shared/components/Heading';

import HomeLayout from './HomeLayout';

const Home = () => (
  <HomeLayout>
    <Heading style={{ marginBottom: '0.5rem' }}>Hello Notes</Heading>
    <h3 style={{ fontWeight: 200, fontSize: '2.3rem', paddingTop: '1rem' }}>
      A simple note taking app
    </h3>
  </HomeLayout>
);

export default Home;
