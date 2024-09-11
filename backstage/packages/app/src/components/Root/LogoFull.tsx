import React from 'react';
import MyCustomLogoFull from './logo/Fusion5_B3_Light.png';
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles({
  img: {
    width: 100,

    height: 'auto'
  },
  path: {
    fill: '#7df3e1',
  },
});
const LogoFull = () => {
  const classes = useStyles();
  return <img className={classes.img} src={MyCustomLogoFull} />;
};


export default LogoFull