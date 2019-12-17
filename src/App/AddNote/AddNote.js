import React, { useRef, useState } from 'react';
import { Redirect } from 'react-router-dom';

import createNote from 'shared/api/createNote';

import Button from 'shared/components/Button';
import File from 'shared/components/File';
import Form from 'shared/components/Form';
import Label from 'shared/components/Label';
import Layout from 'shared/components/Layout';
import TextArea from 'shared/components/TextArea';

import config from 'shared/config/amplify';

import s3FileUpload from 'shared/libs/s3FileUpload';

const AddNote = () => {
  const file = useRef(null);
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const validateForm = () => content.length > 0;

  // eslint-disable-next-line
  const handleFileChange = event => (file.current = event.target.files[0]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (file.current && file.current.size > config.s3.MAX_ATTACHMENT_SIZE) {
      console.warn(
        `Please pick a file smaller than ${config.s3.MAX_ATTACHMENT_SIZE
          / 1000000} MB.`,
      );
      return;
    }

    setLoading(true);

    try {
      const attachment = file.current ? await s3FileUpload(file.current) : null;

      await createNote({ content, attachment });
      setRedirect(true);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };
  return (
    <Layout>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="content">
          Add a note
          <TextArea
            id="content"
            onChange={(event) => setContent(event.target.value)}
          />
        </Label>
        <Label htmlFor="file" left>
          Attachment
          <File type="file" id="file" onChange={handleFileChange} />
        </Label>
        <Button disabled={!validateForm()}>
          {loading ? 'LOADING' : 'SUBMIT'}
        </Button>
      </Form>
      {redirect && <Redirect to="/" />}
    </Layout>
  );
};

export default AddNote;
