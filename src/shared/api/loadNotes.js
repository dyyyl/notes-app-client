import { API } from 'aws-amplify';

const loadNotes = () => API.get('notes', '/notes');

export default loadNotes;
