import { API } from 'aws-amplify';

const loadNote = (id) => API.get('notes', `/notes/${id}`);

export default loadNote;
