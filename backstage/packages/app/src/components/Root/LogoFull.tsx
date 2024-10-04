import React from 'react';
import CustomLogoFull from './logo/Fusion5_B3_Light.png';
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles({
  img: {
    width: 100,

    height: 'auto'
  },

});
const LogoFull = () => {
  const classes = useStyles();
  return <img className={classes.img} src={CustomLogoFull} alt="Fusion5" />;
};


export default LogoFull;