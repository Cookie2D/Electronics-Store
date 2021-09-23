import React, {useEffect, useState} from 'react';
import CardItem from "../CardItem/CardItem";
import Loader from "../Loader/Loader";
import {Box, Button, CssBaseline, Grid} from "@material-ui/core";
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
        setGoodItems(state => state + 3);
        fetchGoods().then(data => setState(data));

    }, [])

    useEffect(() => {
        fetchGoods()
            .then(data => {
                if (data.length) setState(data)
            })
    }, [goodItems])

    const onClickHandler = () => {
        setGoodItems(state => state + 3);
    };

    return (
        <>
            <CssBaseline/>
            <Box className={classes.wrap}>
                <Loader loaded={!!state.length}>
                    <Grid container spacing={8} className={classes.listItem}>
                        {
                            state.map(i => (
                                <Grid item key={i.id}>
                                    <CardItem {...i} />
                                </Grid>
                            ))
                        }
                    </Grid>
                    <Button variant="contained"
                            color="primary"
                            onClick={onClickHandler}
                            style={state.length < goodItems ? {display: 'none'} : {display: 'inline-block'}}
                    >MORE</Button>
                </Loader>
            </Box>
        </>
    );
};

export default Cardlist;