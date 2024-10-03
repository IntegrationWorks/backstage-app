import React, { useState } from 'react';
import { TextField, Button, Typography, Container } from '@material-ui/core';

export const IssueForm = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = () => {
    const encodedTitle = encodeURIComponent(title);
    const encodedBody = encodeURIComponent(body);

    const githubUrl = `https://github.com/IntegrationWorks/backstage-app/issues/new?title=${encodedTitle}&body=${encodedBody}`;

    window.location.href = githubUrl;
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h5" gutterBottom>
        Create a GitHub Issue
      </Typography>
      <TextField
        label="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Body"
        value={body}
        onChange={e => setBody(e.target.value)}
        multiline
        fullWidth
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        disabled={!title || !body}
      >
        Create
      </Button>
    </Container>
  );
};
