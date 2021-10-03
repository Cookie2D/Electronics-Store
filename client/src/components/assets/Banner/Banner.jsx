import React from 'react';
import TabList from "../TabList/TabList";
import {Box, Typography} from "@material-ui/core";
import {createStyles, makeStyles} from "@material-ui/styles";

const bannerUrl = "banner"

const useStyles = makeStyles(() => createStyles({
  mainContainer: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    padding: 20,
    border: '40px solid #1769aa',
    borderLeft: 0,
    borderRight: 0,
    borderRadius: 15,
  }
}));

const Banner = () => {
  const classes = useStyles();
  return (
    <Box className={classes.mainContainer}>
      <Typography
        variant='h3'
        component='h1'
        gutterBottom
      >Welcome to Electronics Store</Typography>
      <Typography
        variant='h5'
        component='p'
        gutterBottom
      >We are doing such things: </Typography>

      <TabList fetchUrl={bannerUrl}/>
    </Box>
  );
};

export default Banner;