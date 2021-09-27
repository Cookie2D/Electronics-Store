import React, {useEffect, useState} from 'react';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import {Button, Chip, Container, Grid, Paper, Typography} from "@material-ui/core";
import List from "@material-ui/core/List";
import {createStyles, makeStyles} from "@material-ui/styles";
import Characteristic from "../Characteristic/Characteristic";
import {NavLink} from "react-router-dom";
import Loader from "../Loader/Loader";


const useStyles = makeStyles(() => createStyles({
  image: {
    width: '100%',
    maxWidth: '400px',
    height: 'auto',
    borderRadius: 15,
  },
  title: {
    fontWeight: 700,
  },
  container: {
    paddingTop: 25,
    paddingBottom: 15,
    background: '#cfd8dc',
    alignItems: 'center',

    ['@media (max-width:1000px)']: { // eslint-disable-line no-useless-computed-key
      flexDirection: 'column',
      alignItems: 'center',
    }
  },
  characteristic: {
    marginTop: 15,
  },
  paper: {
    width: '100%',
    maxWidth: '400px',
    padding: 15,
    height: 'auto',
  },
  button: {
    margin: 5,
  },
  price: {
    padding: "5px 10px",
    borderRadius: 5,
    backgroundColor: '#3f51b5',
    color: 'white',

    display: 'flex',
    alignItems: "center",
    justifyContent: 'space-between'
  },
  listRoot: {
    width: '100%',
    padding: '15px 0',
    backgroundColor: "white",
    overflow: 'auto',
    margin: "0 auto",
    maxHeight: 1000,
  },
}))

const Product = (props) => {
  const classes = useStyles();
  const [prevPath, setPrevPath] = useState('');
  const [isLoaded, setIsLoaded] = useState(false)
  const [product, setProduct] = useState([]);


  useEffect(() => {
    fetch(`http://localhost:4000/api${props.url}`)
      .then(res => res.json())
      .then(data => {
        if (data.length !== 0) {
          const [item] = data;
          setProduct(item);
          setIsLoaded(true);
        }
      })

    const curPath = window.location.pathname;
    let path = curPath.split('/')
    path.pop();
    path = path.join('/')
    setPrevPath(path);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Loader loaded={isLoaded}>
      <Container className={classes.container}>
        <Typography
          color="primary"
          gutterBottom
          align="center"
          variant='h4'
          component='h1'
          className={classes.title}
        >
          {product.title}
          <Chip color="secondary" label={"У наявності: " + product.amount}/>

        </Typography>

        <Grid container className={classes.container}>
          <Grid item xs>
            <Container>
              <Paper elevation={20} className={classes.paper}>
                <img src={product.img} alt={product.name} className={classes.image}/>
              </Paper>
            </Container>
          </Grid>
          <Grid container item xs className={classes.characteristic}>
            <List className={classes.listRoot}>
              <Characteristic items={product.characteristics}/>
            </List>
          </Grid>
        </Grid>
        <Grid>
          <Grid className={classes.price}>
            <Typography variant='h3'>
              Ціна: {product.price} ₴
            </Typography>
            <Grid>
              <Button
                variant="contained"
                className={classes.button}
              >
                <NavLink to={prevPath}>
                  Go back
                </NavLink></Button>
              <Button
                className={classes.button}
                variant="contained"
                color="secondary"
                startIcon={<AddShoppingCartIcon/>}
              >
                Add to card
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Loader>

  );
};

export default Product;