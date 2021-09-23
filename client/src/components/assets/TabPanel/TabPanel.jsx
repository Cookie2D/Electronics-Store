import React from 'react';
import {Box, Typography} from "@material-ui/core";
import PropTypes from "prop-types";
import {createStyles, makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(() => createStyles({
  image: {
    maxWidth: "100%",
    height: 'auto',
    borderRadius: 4,
  },
  box: {
    alignItems: "center",
    maxWidth: "500px",
    minHeight: "400px",
  }
}))


const TabPanel = ({panel}) => {
  const classes = useStyles();
  return (
    <Box className={classes.box}
    >
      <Typography align="center" gutterBottom>
        {panel.body}
      </Typography>
      <img className={classes.image} src={panel.img} alt={panel.title}/>
    </Box>
  );
};

TabPanel.propTypes = {
  panel: PropTypes.object.isRequired,
}

export default TabPanel;