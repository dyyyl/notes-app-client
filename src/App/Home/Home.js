import React from 'react';

import HomeLayout from './HomeLayout';

const Home = () => (
  <HomeLayout>
    <h1 style={{ fontWeight: 200, fontSize: '4rem' }}>Hello Notes</h1>
    <h3 style={{ fontWeight: 200, fontSize: '1.4rem', paddingTop: '1rem' }}>
      A simple note taking app
    </h3>
  </HomeLayout>
);

export default Home;
