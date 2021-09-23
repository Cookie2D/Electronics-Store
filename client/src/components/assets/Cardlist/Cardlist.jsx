import React, {useEffect, useState} from 'react';
import CardItem from "../CardItem/CardItem";
import Loader from "../Loader/Loader";
import {Box, Button, Container, CssBaseline, Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";


const useStyles = makeStyles({
    listItem: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: "2rem 0",
        alignItems: 'center'
    },
    wrap: {
        textAlign: 'center',
        padding: '2rem 0'
    }
});

const Cardlist = () => {

    const classes = useStyles();
    const [state, setState] = useState([]);
    const [goodItems, setGoodItems] = useState(0);

    function urlGenerator() {
        let url = new URL("http://localhost:4000/api/categories");
        url.searchParams.set('item', goodItems);
        return url
    }

    const fetchGoods = () => {
        return fetch(urlGenerator())
            .then(res => res.json())
    }

    useEffect(() => {
        fetchGoods().then(data => setState(data));
        setGoodItems(state => state + 3);
    }, [])

    useEffect(() => {
        fetchGoods()
            .then(data => setState(data))
    }, [goodItems])

    const onClickHandler = () => {
        setGoodItems(state => state + 3);
    };

    if (state.length === 0) {
        return (
            <Box className={`${classes.wrap + ' ' + classes.listItem}`} style={{height: '300px'}}>
                <Typography gutterBottom variant="h6" component="h2" style={{margin: 0}}>
                    LOADING ...
                </Typography>
                <Loader/>
            </Box>
        )

    } else {
        return (
            <>
                <CssBaseline/>
                <Box className={classes.wrap}>
                    <Grid container spacing={8} className={classes.listItem}>
                        {
                            state.map(i => (
                                <Grid item>
                                    <CardItem {...i} key={i.id}/>
                                </Grid>
                            ))
                        }
                    </Grid>
                    <Button variant="contained"
                            color="primary"
                            onClick={onClickHandler}
                            style={state.length < goodItems ? {display: 'none'} : {display: 'inline-block'}}
                    >MORE</Button>
                </Box>
            </>
        );
    }
};

export default Cardlist;