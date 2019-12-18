import { API } from 'aws-amplify';

const deleteNote = (id) => API.del('notes', `/notes/${id}`);

export default deleteNote;
