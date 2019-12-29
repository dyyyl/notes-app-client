import { Storage } from 'aws-amplify';
import React, { useEffect, useRef, useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';

import deleteNote from 'shared/api/deleteNote';
import loadNote from 'shared/api/loadNote';
import saveNote from 'shared/api/saveNote';

import Button from 'shared/components/Button';
import File from 'shared/components/File';
import Form from 'shared/components/Form';
import Label from 'shared/components/Label';
import Layout from 'shared/components/Layout';
import TextArea from 'shared/components/TextArea';

import config from 'shared/config/amplify';

import formatFilename from 'shared/libs/formatFilename';
import s3FileDelete from 'shared/libs/s3FileDelete';
import s3FileUpload from 'shared/libs/s3FileUpload';
import validateForm from 'shared/libs/validateForm';

import ButtonContainer from './ButtonContainer';

const Note = () => {
  const file = useRef(null);
  const [note, setNote] = useState(null);
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const { userId } = useParams();

  useEffect(() => {
    const onLoad = async () => {
      try {
        const noteData = await loadNote(userId);
        const { attachment } = noteData;
        const noteContent = noteData.content;

        if (attachment) {
          noteData.attachmentURL = await Storage.vault.get(attachment);
        }

        setContent(noteContent);
        setNote(noteData);
      } catch (error) {
        alert(error);
      }
    };

    onLoad();
  }, [userId]);

  const handleFileChange = (event) => {
    // eslint-disable-next-line
    file.current = event.target.files[0];
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let attachment;

    if (file.current && file.current.size > config.MAX_ATTACHMENT_SIZE) {
      console.warn(
        `Please pick a file smaller than ${config.MAX_ATTACHMENT_SIZE
          / 1000000} MB.`,
      );
      return;
    }

    setLoading(true);

    try {
      if (file.current) {
        attachment = await s3FileUpload(file.current);

        // if attachment is new, remove former attachment
        if (attachment && attachment !== note.attachment) {
          await s3FileDelete(note.attachment);
        }
      }

      await saveNote(userId, {
        content,
        attachment: attachment || note.attachment,
      });

      setRedirect(true);
    } catch (error) {
      alert(error);
      setLoading(false);
    }
  };

  const handleDelete = async (event) => {
    event.preventDefault();

    // eslint-disable-next-line
    const confirmed = window.confirm(
      'Are you sure you want to delete this note?',
    );

    if (!confirmed) {
      return;
    }

    setDeleting(true);

    try {
      await deleteNote(userId);

      // if attachment is new, remove former attachment
      if (note.attachment) {
        await s3FileDelete(note.attachment);
      }

      setRedirect(true);
    } catch (error) {
      alert(error);
      setDeleting(false);
    }
  };

  return (
    <Layout>
      {note && (
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="content">
            Edit your note
            <TextArea
              id="content"
              value={content}
              onChange={(event) => setContent(event.target.value)}
            />
          </Label>
          {note.attachment && (
            <Label htmlFor="file" left style={{ marginBottom: '1rem' }}>
              Current Attachment
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={note.attachmentURL}
                style={{ fontSize: '1.45rem', margin: '1rem' }}
              >
                {formatFilename(note.attachment)}
              </a>
            </Label>
          )}
          <Label htmlFor="file" left>
            Change Attachment
            <File type="file" id="file" onChange={handleFileChange} />
          </Label>
          <ButtonContainer>
            <Button type="submit" disabled={!validateForm(content)}>
              {loading ? 'LOADING' : 'SAVE'}
            </Button>
            <Button type="button" onClick={handleDelete}>
              {deleting ? 'LOADING' : 'DELETE'}
            </Button>
          </ButtonContainer>
        </Form>
      )}
      {redirect && <Redirect to="/" />}
    </Layout>
  );
};

export default Note;
