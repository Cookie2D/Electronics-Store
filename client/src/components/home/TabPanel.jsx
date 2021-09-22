import React from 'react';
import {Box, Typography} from "@material-ui/core";

const TabPanel = (props) => {
  return (
    <Box
      alignItems="center"
      maxWidth="500px"
    >
      <Typography align="center" gutterBottom>
        {props.body}
      </Typography>
      <img style={{maxWidth: "100%", height: "auto"}} src={props.img} alt="image"/>
    </Box>
  );
};

export default TabPanel;