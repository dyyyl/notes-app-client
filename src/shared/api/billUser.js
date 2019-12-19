import { API } from 'aws-amplify';

const billUser = (details) =>
  // eslint-disable-next-line
  API.post('notes', '/billing', {
    body: details,
  });

export default billUser;
