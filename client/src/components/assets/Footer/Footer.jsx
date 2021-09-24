import React from 'react';
import logo from './logo_1.png';
import fb_logo from './fb_logo.png';
import tw_logo from './tw_logo.png';
import ln_logo from './ln_logo.png';
import google_logo from './google_logo.png';
import {Box} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    footerView: {
        display: 'flex',
        flexDirection: 'column',
        padding: '30px 15px'
    },
    img: {
        cursor: "pointer",
        width: '35px',
        height: '35px',
        margin: '3px'
    },
    info: {
        display: 'flex',
        flexDirection: 'row',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column'
        },
    },
    infoItem: {
        flexBasis: '80px',
        flexGrow: 1,
        textAlign: 'center'
    }
}))

const Footer = () => {
    const classes = useStyles();
    return (
        <Box className={classes.footerView}>
            <Box className={classes.info}>
                <Box  className={classes.infoItem}>
                    <h3 style={{margin: '1px 0'}}>Electronics Store</h3>
                    <p style={{margin: '0 0'}}>is a website that has an incredible number of different things going on
                        at once. It’s not just a retailer. </p>
                </Box>
                <Box className={classes.infoItem}>
                    <img style={{cursor: 'pointer'}} src={logo} alt={"mainLogo"}/>
                </Box>
                <Box className={classes.infoItem}>
                    <img className={classes.img} src={fb_logo} alt={"logo Facebook"}/>
                    <img className={classes.img} src={tw_logo} alt={"logo Twitter"}/>
                    <img className={classes.img} src={ln_logo} alt={"logo Linkedin"}/>
                    <img className={classes.img} src={google_logo} alt={"logo google+"}/>
                </Box>
            </Box>
            <Box className={classes.infoItem}>
                <hr/>
                <p> Copyright © 2021. All rights reserved by React team 4</p>
            </Box>
        </Box>
    );
};

export default Footer;
