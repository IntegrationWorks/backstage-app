import React from 'react';
import { Typography, Grid, Box, makeStyles } from '@material-ui/core'; 
import { Content, ContentHeader } from '@backstage/core-components';

const useStyles = makeStyles({
  welcomeMessage: {
    color: '#3f51b5',
    marginTop: '20px',
  },
  description: {
    fontSize: '1.2rem',
    marginTop: '10px',
  },
});

export const HomePage = () => {
  const classes = useStyles();

  return (
    <Content>
      <ContentHeader title="Welcome to the Developer Portal">
      </ContentHeader>

      <Box mt={4}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography className={classes.welcomeMessage} variant="h3" component="h1">
             Welcome to the Developer Portal
            </Typography>
            <Typography className={classes.description} variant="body1" component="p">
              This is a developer portal for managing your infrastructure and
              developer tooling.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Content>
  );
};
