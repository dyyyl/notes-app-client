import { API } from 'aws-amplify';

const createNote = (note) => {
  console.log(note);
  return API.post('notes', '/notes', {
    body: note,
  });
};

export default createNote;
