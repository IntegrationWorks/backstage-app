import React, { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  Container,
  Paper,
  Grid,
  makeStyles,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl
} from '@material-ui/core';
import { Send as SendIcon } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(6),
    padding: theme.spacing(4),
    backgroundColor: theme.palette.secondary.main,
  },
  title: {
    marginBottom: theme.spacing(3),
    fontWeight: 'bold',
    color: theme.palette.primary.main,
  },
  submitButton: {
    marginTop: theme.spacing(3),
  },
  formControl: {
    marginTop: theme.spacing(2)
  },
}));

export const IssueForm = () => {
  const classes = useStyles();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [issueType, setIssueType] = useState('app-issue');

  const handleSubmit = () => {
    const encodedTitle = encodeURIComponent(title);
    const encodedBody = encodeURIComponent(body);
    const template = issueType === 'issue_report' ? 'issue_report.md' : 'template_request.md';


    const githubUrl = `https://github.com/IntegrationWorks/backstage-templates/issues/new?title=${encodedTitle}&body=${encodedBody}&template=${template}`;

    window.open(githubUrl, '_blank');
  };

  return (
    <Container maxWidth="sm">
      <Paper className={classes.root} elevation={4}>
        <Typography variant="h4" className={classes.title} align="center">
          Report an Issue or Improvement
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
           <Typography variant="body1" gutterBottom>
             As the Backstage IDP is a work in progress, you may run in to issues or missing features, please fill out the following form, which will take you to the creation of a GitHub issue. This will be added to the agenda. 
           </Typography>
           <br/>
           <FormControl component="fieldset" className={classes.formControl}>
              <Typography variant="h6" gutterBottom>
                Type of Report
              </Typography>
              <RadioGroup
                aria-label="issue-type"
                name="issueType"
                value={issueType}
                onChange={(e) => setIssueType(e.target.value)}
                row
              >
                <FormControlLabel
                  value="issue_report"
                  control={<Radio color="primary" />}
                  label="App Issue"
                />
                <FormControlLabel
                  value="template_request"
                  control={<Radio color="primary" />}
                  label="Template Request"
                />
              </RadioGroup>
            </FormControl>
            <Typography variant="h6" gutterBottom>
             Title
            </Typography>
            <TextField
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              fullWidth
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
             Description
            </Typography>
            <TextField
              value={body}
              onChange={(e) => setBody(e.target.value)}
              multiline
              fullWidth
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12} justifyContent="center">
            <Button
              className={classes.submitButton}
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              disabled={!title || !body}
              startIcon={<SendIcon />}
              size="large"
            >
              Create Issue
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};
