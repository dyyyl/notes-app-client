import { API } from 'aws-amplify';

const createNote = (note) =>
  // eslint-disable-next-line
  API.post('notes', '/notes', {
    body: note,
  });

export default createNote;
