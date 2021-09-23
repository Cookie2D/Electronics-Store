import React from 'react';
import Banner from "../Banner/Banner";
import Cardlist from "../Cardlist/Cardlist";
import {makeStyles} from "@material-ui/styles";


const useStyles = makeStyles({
    back: {
        background: '#cfd8dc',
    }
});

const Body = () => {
    const classes = useStyles();
    return (
            <div className={classes.back}>
                <Banner/>
                <Cardlist/>
            </div>
    );
};

export default Body;