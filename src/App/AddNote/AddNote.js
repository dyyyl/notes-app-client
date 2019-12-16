import React, { useRef, useState } from 'react';

import Button from 'shared/components/Button';
import Form from 'shared/components/Form';
import Label from 'shared/components/Label';
import Layout from 'shared/components/Layout';
import TextArea from 'shared/components/TextArea';

import config from 'shared/config/amplify';

const AddNote = () => {
  const file = useRef(null);
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);

  const validateForm = () => content.length > 0;

  const handleFileChange = (event) => {
    const [currentFile] = event.target;
    file.current = currentFile;
  };

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
          <input
            type="file"
            id="file"
            style={{ marginTop: '1rem' }}
            onChange={handleFileChange}
          />
        </Label>
        <Button disabled={!validateForm()}>
          {loading ? 'LOADING' : 'SUBMIT'}
        </Button>
      </Form>
    </Layout>
  );
};

export default AddNote;
