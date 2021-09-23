import React from 'react';
import {Box, Button, Card, Container, Paper, Typography} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import {createStyles, makeStyles} from "@material-ui/styles";
import * as url from "url";

const useStyles = makeStyles(() => createStyles({
  container: {
    backgroundImage: `url(https://img4.goodfon.ru/wallpaper/nbig/e/fc/gears-gray-background-gray-seryi-fon-zvezdochki-shesterni.jpg)`,
    backgroundSize: 'cover',
    width: "100vw",
    height: "100vh",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 300,
    height: 250,
    borderRadius: 40,
    backgroundColor: 'rgba(91,182,220,0.7)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  link: {
    color: 'black',
    textDecoration: 'none',
  },
  text: {
    color: 'white',
  }

}));
const NotFound = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.box}>
        <Typography variant='h1' className={classes.text}>404</Typography>
        <Typography variant='h5' className={classes.text}>Oops.. page doesn't find</Typography>
        <Button variant="contained" style={{marginTop: 20}}>
          <NavLink to='/' className={classes.link}>Back to Home page</NavLink>
        </Button>
      </Box>

    </Box>
  );
};

export default NotFound;