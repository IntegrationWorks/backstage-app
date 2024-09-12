import React from 'react';
import { Grid, Typography, Box, Button, Card, CardContent, makeStyles } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import CloudIcon from '@material-ui/icons/Cloud';
import FontDownloadIcon from '@material-ui/icons/FontDownload';
import BuildIcon from '@material-ui/icons/Build';
import ListIcon from '@material-ui/icons/List';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import CreateIcon from '@material-ui/icons/Create';
import ExtensionIcon from '@material-ui/icons/Extension';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    marginTop: theme.spacing(8),
  },
  greeting: {
    backgroundColor: '#FD7B23',
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    textAlign: 'center',
    marginBottom: theme.spacing(4),
  },
  welcomeBlock: {
    width: '12000px', 
    padding: theme.spacing(2),
    marginBottom: theme.spacing(4),
  },
  button: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(2),
    width: '200px', 
    height: '150px',
    color: '#FFFFFF'
  },
  toolbox: {
    padding: theme.spacing(2),
  },
  iconButton: {
    margin: theme.spacing(1),
    fontSize: '2rem',
  },
  h2: {
    color: '#FFFFFF',
    fontWeight: 600,
    marginBottom: theme.spacing(4),
  },
  description: {
    fontSize: '1.2rem',
    marginBottom: theme.spacing(6),
    color: '#FFFFFF',
  },
  buttonContainer: {
    marginTop: theme.spacing(4),
  },
  buttonGrid: {
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(2),
  },
  icon: {
    fontSize: '3rem',
    marginBottom: theme.spacing(1),
    color: '#FFFFFF',
  },
}));

export const HomePage = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>

      <Card className={classes.welcomeBlock}>
        <CardContent>
          <Typography variant="h2" gutterBottom>Welcome to Backstage!</Typography>

          <Typography variant="body1" paragraph>
            Backstage is a tool used for efficient repository creation through high quality, standardized templates.
            Creating a repository using a template in Backstage is a streamlined process
            that simplifies the setup of new projects.
          </Typography>

          <Typography variant="body1" paragraph>
            To create a repo, navigate to the "Create" section in the Backstage
            portal. Then select the appropriate pre-configured template that fits your project needs.
          </Typography>

          <Typography variant="body1" paragraph>
            You will then be prompted to fill out a form with specific details like the project name,
            repository location, and any necessary configuration options.
          </Typography>

          <Typography variant="body1" paragraph>
            Once the form is submitted, Backstage automatically generates the new repository by cloning
            the selected template and you're ready to go.
          </Typography>
        </CardContent>
      </Card>
      <Grid container spacing={4} className={classes.buttonGrid}>
          <Grid item>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              href="/catalog"
            >
              <MenuBookIcon className={classes.icon} />
              Catalog
            </Button>
          </Grid>
          <Grid item>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              href="/api-docs"
            >
              <ExtensionIcon className={classes.icon} />
               APIs
            </Button>
          </Grid>
          <Grid item>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              href="/docs"
            >
              <LibraryBooksIcon className={classes.icon} />
               Documentation
            </Button>
          </Grid>
          <Grid item>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              href="/create"
            >
              <CreateIcon className={classes.icon} />
               Create
            </Button>
          </Grid>
        </Grid>
      <Grid container spacing={4} className={classes.buttonGrid}>
        <Card className={classes.toolbox}>
          <CardContent>
            <Typography variant="h5" gutterBottom>Developer Toolbox</Typography>
            <Grid container justify="center">
              <Grid item>
                <Button href="https://github.com/IntegrationWorks" className={classes.iconButton}>
                  <GitHubIcon fontSize="large" />
                  <Typography> GitHub</Typography>
                </Button>
              </Grid>
              <Grid item>
                <Button href="https://aws.amazon.com/" className={classes.iconButton}>
                  <CloudIcon fontSize="large" />
                  <Typography> AWS</Typography>
                </Button>
              </Grid>
              <Grid item>
                <Button href="https://portal.azure.com/" className={classes.iconButton}>
                  <FontDownloadIcon fontSize="large" />
                  <Typography> Azure</Typography>
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Grid item>
          <Card className={classes.toolbox}>
            <CardContent>
              <Typography variant="h5" gutterBottom>Template Sources</Typography>
              <Grid container justify="center">
                <Grid item>
                  <Button href="https://github.com/IntegrationWorks/backstage-templates" className={classes.iconButton}>
                    <BuildIcon fontSize="large" />
                    <Typography> Backstage</Typography>
                  </Button>
                </Grid>
                <Grid item>
                  <Button href="https://github.com/IntegrationWorks/github-actions-templates" className={classes.iconButton}>
                    <ListIcon fontSize="large" />
                    <Typography> GitHub Actions</Typography>
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};
