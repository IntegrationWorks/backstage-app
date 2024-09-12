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
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    textAlign: 'center',
    marginBottom: theme.spacing(4),
  },
  welcomeBlock: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(4),
  },
  button: {
    marginRight: theme.spacing(2),
  },
  toolbox: {
    padding: theme.spacing(2),
  },
  iconButton: {
    margin: theme.spacing(1),
    fontSize: '2rem',
  },

  welcomeMessage: {
    color: '#FD7B23',
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
  // button: {
  //   color: '#FD7B23',
  //   margin: theme.spacing(2),
  //   width: '100%',
  //   height: '100%',
  //   minWidth: '150px',
  //   maxWidth: '250px',
  //   minHeight: '150px',
  //   maxHeight: '250px',
  //   fontSize: '1.2rem',
  //   display: 'flex',
  //   flexDirection: 'column',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   padding: theme.spacing(2),
  // },
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
      {/* Personalized Greeting */}
      <Box className={classes.greeting}>
        <Typography variant="h4">Welcome</Typography>
        <Typography variant="body1">Part of the solution</Typography>
      </Box>

      {/* Welcome Block */}
      <Card className={classes.welcomeBlock}>
        <CardContent>
          <Typography variant="h5" gutterBottom>Welcome to Backstage!</Typography>
          <Typography variant="body1" paragraph>
            Backstage is a tool used for quick repository creation through high quality, standardized templates.
          </Typography>
          <Button className={classes.button} variant="contained" color="primary">Getting Started</Button>
          <Button className={classes.button} variant="outlined">Open Tour</Button>
        </CardContent>
      </Card>

      {/* Developer Toolbox */}
      <Card className={classes.toolbox}>
        <CardContent>
          <Typography variant="h5" gutterBottom>Developer Toolbox</Typography>
          <Grid container justify="center">
            <Grid item>
              <Button href="https://github.com/IntegrationWorks" className={classes.iconButton}>
                <GitHubIcon fontSize="large" />
                <Typography>GitHub</Typography>
              </Button>
            </Grid>
            <Grid item>
              <Button href="https://aws.amazon.com/" className={classes.iconButton}>
                <CloudIcon fontSize="large" />
                <Typography>Azure</Typography>
              </Button>
            </Grid>
            <Grid item>
              <Button href="https://portal.azure.com/" className={classes.iconButton}>
                <FontDownloadIcon fontSize="large" />
                <Typography>Azure</Typography>
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      {/* Backstage links */}
      <Card className={classes.toolbox}>
        <CardContent>
          <Typography variant="h5" gutterBottom>Developer Toolbox</Typography>
          <Grid container justify="center">
            <Grid item>
              <Button href="https://github.com/IntegrationWorks/backstage-templates" className={classes.iconButton}>
                <BuildIcon fontSize="large" />
                <Typography>Backstage Templates</Typography>
              </Button>
            </Grid>
            <Grid item>
              <Button href="https://github.com/IntegrationWorks/github-actions-templates" className={classes.iconButton}>
                <ListIcon fontSize="large" />
                <Typography>GitHub Actions Templates</Typography>
              </Button>
            </Grid>
          </Grid>
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
              Catalogue
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
        </Grid>

        <Grid container spacing={4} className={classes.buttonGrid}>
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
        </Grid>
    </Box>
  );
};
