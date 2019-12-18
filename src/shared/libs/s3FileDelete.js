import { Storage } from 'aws-amplify';

const s3FileDelete = async (file) => {
  const response = await Storage.vault.remove(file);

  return response;
};

export default s3FileDelete;
