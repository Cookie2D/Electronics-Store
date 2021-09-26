import React from 'react';
import {makeStyles} from "@material-ui/styles";


const useStyles = makeStyles({
    back: {
        background: '#cfd8dc',
    }
});

const Body = (props) => {
    const classes = useStyles();
    return (
            <div className={classes.back}>
                {props.children}
            </div>
    );
};

export default Body;