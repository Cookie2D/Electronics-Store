import React from 'react';
import {useSearch} from "../../content/searchContext";
import {Box, CssBaseline, Grid, Typography} from "@material-ui/core";
import Loader from "../Loader/Loader";
import GoodsItem from "../GoodsItem/GoodsItem";
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


const SearchList = () => {
    const classes = useStyles();
    const {search} = useSearch();

    return (
        <>
            <CssBaseline/>
            <Box className={classes.wrap}>
                <Loader loaded={!!search}>
                    {
                        search.length === 0 ? (
                                <Typography gutterBottom variant="h6" component="h6">
                                    НЕМАЄ ІНФОРМАЦІЇ ПО ВАШОМУ ЗАПИТУ
                                </Typography>
                            ) :

                            <Grid container spacing={8} className={classes.listItem}>
                                {
                                    search.map(item => (
                                        <Grid item key={item.id}>
                                            <GoodsItem info={item}/>
                                        </Grid>
                                    ))
                                }
                            </Grid>
                    }
                </Loader>
            </Box>
        </>
    );
};

export default SearchList;