import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

import loadNotes from 'shared/api/loadNotes';

import HomeLayout from './HomeLayout';
import Landing from './Landing';
import Notes from './Notes';

const Home = ({ authenticated }) => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const onLoad = async () => {
      if (!authenticated) {
        return;
      }

      try {
        const noteData = await loadNotes();
        setNotes(noteData);
      } catch (error) {
        console.error(error);
      }

      setLoading(false);
    };

    onLoad();
  }, [authenticated]);

  return (
    <HomeLayout>
      {!authenticated ? <Landing /> : <Notes loading={loading} notes={notes} />}
    </HomeLayout>
  );
};

Home.propTypes = {
  authenticated: PropTypes.bool.isRequired,
};

export default Home;
