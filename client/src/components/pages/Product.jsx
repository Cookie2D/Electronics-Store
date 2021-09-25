import React from 'react';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import {Button, Chip, Container, Grid, Paper, Typography} from "@material-ui/core";
import List from "@material-ui/core/List";
import {createStyles, makeStyles} from "@material-ui/styles";
import PropTypes from "prop-types";
import Characteristic from "../assets/Characteristic/Characteristic";


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
    maxHeight: 500,
  },
}))

const Product = ({goods}) => {
  // const goods = {
  //   "id": 1,
  //   "title": "Мобільний телефон Apple iPhone 11 64GB Black Slim Box",
  //   "type": "Мобільний телефон",
  //   "name": "Apple iPhone 11",
  //   "img": "https://content2.rozetka.com.ua/goods/images/big/37357013.jpg",
  //   "price": "19000",
  //   "amount": "10",
  //   "characteristics": {
  //     "Стандарт звязку/інтернет": [
  //       {"Стандарти": "2G (GPRS/EDGE)\n3G (WCDMdsadasd asdasdasdasdA/UMTS/HSPA)\n4G (LTE)"}
  //     ],
  //     "Дісплей": [
  //       {"Діагональ": "6.1"},
  //       {"Розширення": "1792 x 828"},
  //       {"Тип матриці": "IPS"},
  //       {"Матеріа": "скло"}
  //     ],
  //     "Функції пам'яті": [
  //       {
  //         "Оперативна пам'ять": [
  //           {"Дешевий": "4гб"},
  //           {"Дорогий": "8гб"}
  //         ]
  //       },
  //       {"Внутрішня пам'ять": "64 gb"}
  //     ],
  //     "Операцiйна система": [
  //       {"Операцiйна система": "iOS"}
  //     ],
  //     "Процесор": [
  //       {"Назва": "Apple A13 Bionic"},
  //       {"Кількість ядер": "2+4"},
  //       {"Процесор": "Apple Ax"}
  //     ],
  //     "Фотокамера": [
  //       {"Фронтальнакамера": "1"},
  //       {"Кількість мегапікселів": "12 Мп"}
  //     ]
  //   }
  // };
  const classes = useStyles();

  const characteristics = goods.characteristics;
  return (
    <Container className={classes.container}>
      <Typography
        color="primary"
        gutterBottom
        align="center"
        variant='h4'
        component='h1'
        className={classes.title}
      >
        {goods.title}
        <Chip color="secondary" label={"У наявності: " + goods.amount}/>

      </Typography>

      <Grid container className={classes.container}>
        <Grid item xs>
          <Container>
            <Paper elevation={20} className={classes.paper}>
              <img src={goods.img} alt={goods.name} className={classes.image}/>
            </Paper>
          </Container>
        </Grid>
        <Grid container item xs className={classes.characteristic}>
          <List className={classes.listRoot}>
            <Characteristic items={characteristics}/>
          </List>
        </Grid>
      </Grid>
      <Grid>
        <Grid className={classes.price}>
          <Typography variant='h3'>
            Ціна: {goods.price}
          </Typography>
          <Grid>
            <Button variant="contained" className={classes.button}>Go Back</Button>
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
  );
};

Product.propTypes = {
  goods: PropTypes.object.isRequired,
}

export default Product;