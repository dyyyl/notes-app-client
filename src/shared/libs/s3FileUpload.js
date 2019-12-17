import { Storage } from 'aws-amplify';

const s3FileUpload = async (file) => {
  const filename = `${Date.now()}-${file.name}`;

  const stored = await Storage.vault.put(filename, file, {
    contentType: file.type,
  });

  return stored.key;
};

export default s3FileUpload;
