import React, {useEffect, useState} from 'react';
import Loader from "../Loader/Loader";
import {Box, CssBaseline, Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import GoodsItem from "../GoodsItem/GoodsItem";
import Filter from "../Filter/Filter";


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
  const [state, setState] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false)
  const [goods, setGoods] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/api${props.url}`)
      .then(res => res.json())
      .then(data => {
        if (data.length !== 0) {
          setState(data);
          setGoods(data)
          setIsLoaded(true)
        }
      })

  }, [props.url])

  return (
    <>
      <Filter goods={goods} setGoods={setState}/>
      <CssBaseline/>
      <Box className={classes.wrap}>
        <Loader loaded={isLoaded}>
          <Grid container spacing={8} className={classes.listItem}>
            {
              state.map(i => (
                <Grid item key={i.id}>
                  <GoodsItem info={i} url={props.url}/>
                </Grid>
              ))
            }
          </Grid>
        </Loader>
      </Box>
    </>
  );
};

export default GoodsList;