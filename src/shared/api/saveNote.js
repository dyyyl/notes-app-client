import { API } from 'aws-amplify';

const saveNote = (id, note) => {
  console.log(note);
  return API.put('notes', `/notes/${id}`, {
    body: note,
  });
};

export default saveNote;
