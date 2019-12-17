import React, { useState, useEffect } from 'react';

import Heading from 'shared/components/Heading';
import Subheading from 'shared/components/Subheading';

import HomeLayout from './HomeLayout';

const Home = () => {
  const [notes, setNotes] = useState([]);
  const [Loading, setLoading] = useState(true);

  return (
    <HomeLayout>
      <Heading style={{ marginBottom: '0.5rem' }}>Hello Notes</Heading>
      <Subheading>A simple note taking app</Subheading>
    </HomeLayout>
  );
};

export default Home;
