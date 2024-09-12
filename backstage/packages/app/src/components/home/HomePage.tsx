import React from 'react';
import { Typography, Grid, Box, Button } from '@material-ui/core';
import { Content, ContentHeader} from '@backstage/core-components';
import { makeStyles } from '@material-ui/core';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import CategoryIcon from '@material-ui/icons/Category';
import CreateIcon from '@material-ui/icons/Create';
import ExtensionIcon from '@material-ui/icons/Extension';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    marginTop: theme.spacing(8),
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
  button: {
    color: '#FD7B23',
    margin: theme.spacing(2),
    width: '100%',
    height: '100%',
    minWidth: '150px',
    maxWidth: '250px',
    minHeight: '150px',
    maxHeight: '250px',
    fontSize: '1.2rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),
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
    <Content>
      <ContentHeader title="Fusion5 Developer Portal">
      </ContentHeader>
      <Box className={classes.root}>
        <Typography className={classes.welcomeMessage} variant="h3" component="h1">
          Welcome to the Developer Portal
        </Typography>
        <Typography className={classes.description} variant="body1" component="p">
          This is a developer portal for managing your infrastructure and
          developer tooling. Explore the features, manage your services, and
          find documentation on how to use the platform.
        </Typography>
        
        <Grid container spacing={4} className={classes.buttonGrid}>
          <Grid item>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              href="/catalog"
            >
              <CategoryIcon className={classes.icon} />
              Catalog
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
    </Content>
  );
};
