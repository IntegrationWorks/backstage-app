import React from 'react';
import { makeStyles } from '@material-ui/core';
import CustomLogoSQ from './logo/Fusion5_B3_SQ-Dark.400px.png';
const useStyles = makeStyles({
  img: {
    width: 'auto',
    height: 35,
  },

});

const LogoIcon = () => {
  const classes = useStyles();

  return <img className={classes.img} src={CustomLogoSQ} />;
  
};

export default LogoIcon;
