import React from 'react';
import {Box, Typography} from "@material-ui/core";
import PropTypes from "prop-types";

const TabPanel = ({panel}) => {
    return (
        <Box
            alignItems="center"
            maxWidth="500px"
        >
            <Typography align="center" gutterBottom>
                {panel.body}
            </Typography>
            <img style={{maxWidth: "100%", height: "auto"}} src={panel.img} alt={panel.title}/>
        </Box>
    );
};

TabPanel.propTypes = {
    panel: PropTypes.object.isRequired,
}

export default TabPanel;