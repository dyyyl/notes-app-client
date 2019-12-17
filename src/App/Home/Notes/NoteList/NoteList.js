import PropTypes from 'prop-types';
import React from 'react';

import Link from 'shared/components/Link';

import NoteListLayout from './NoteListLayout';
import TimeStamp from './TimeStamp';

const NoteList = ({ notes }) => {
  console.log(notes);
  return (
    <NoteListLayout>
      <Link to="/notes/new">+ Add a new note</Link>
      {notes
        && notes
          .sort((a, b) => b.createdAt - a.createdAt)
          .map((note) => (
            <Link key={note.noteId} to={`/notes/${note.noteId}`}>
              {note.content}
              <br />
              <TimeStamp>
                {`Created: ${new Date(note.createdAt).toLocaleString()}`}
              </TimeStamp>
            </Link>
          ))}
    </NoteListLayout>
  );
};

NoteList.propTypes = {
  notes: PropTypes.array.isRequired,
};

export default NoteList;
