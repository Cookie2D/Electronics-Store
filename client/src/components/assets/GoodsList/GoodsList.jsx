import React, {useEffect, useState} from 'react';
import Loader from "../Loader/Loader";
import {Box, CssBaseline, Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import GoodsItem from "../GoodsItem/GoodsItem";
import Filter from "../Filter/Filter";
import {getDataByUrl} from "../../../API/Api";


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

const GoodsList = (props) => {

  const classes = useStyles();
  const [goods, setGoods] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    getDataByUrl(props.url)
      .then(data => {
        if (data.length) {
          setGoods(data);
          setIsLoaded(true)
        }
      })
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <Filter setGoods={setGoods} url={props.url}/>
      <CssBaseline/>
      <Loader loaded={isLoaded}>
      {!goods.length ? (
        <Typography gutterBottom variant="h6">
          НЕМАЄ ІНФОРМАЦІЇ ПО ВАШОМУ ЗАПИТУ
        </Typography>
      ) : (
        <Box className={classes.wrap}>

            <Grid container spacing={8} className={classes.listItem}>
              {
                goods.map(i => (
                  <Grid item key={i.id}>
                    <GoodsItem info={i} url={props.url}/>
                  </Grid>
                ))
              }
            </Grid>
        </Box>
        )}
      </Loader>
    </>
  );
};

export default GoodsList;