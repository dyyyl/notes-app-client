import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'shared/components/Heading';

import NotesLayout from './NotesLayout';
import NoteList from './NoteList';

const Notes = ({ loading, notes }) => (
  <NotesLayout>
    <Heading>Your Notes</Heading>
    {loading ? <p>Loading...</p> : <NoteList notes={notes} />}
    <div style={{ height: '6vh' }} />
  </NotesLayout>
);

Notes.propTypes = {
  loading: PropTypes.bool.isRequired,
  notes: PropTypes.array.isRequired,
};

export default Notes;
