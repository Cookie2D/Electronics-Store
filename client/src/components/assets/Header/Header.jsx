import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, IconButton, Box } from '@material-ui/core';
import Menu from "../Menu/Menu";
import logo from "./logo_1.png";
import { NavLink } from "react-router-dom";
import SearchBar from "material-ui-search-bar";
import {Route} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
    visibility: 'hidden',
    [theme.breakpoints.down('xs')]: {
      visibility: 'visible'
    }

  },

  icon: {
    borderRadius: '50%',
    transition: '1s',
    '&:hover': {
      filter: 'grayscale(100%)'
    }
  },
  navIcon: {
    paddingRight: '25px',
  },

  nav: {
    width: "100%",
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  navList: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexGrow: 1,
    textAlign: 'center',
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    },
  },
  navItem: {
    cursor: 'pointer',
    flexGrow: 1,
    borderRadius: '20px',
    textDecoration:'none',
    '&:hover': {
      backgroundColor: 'rgba(17, 18, 19, 0.29)',
      boxShadow: '15px -9px 7px -8px rgba(17, 18, 19, 0.29)',
      transition: '1.2s'
    }
  },

  navSearch: {
    borderRadius: '5px',
    height: '35px',
    width: '150px',
    marginRight:'30px',
    
  }
}));


export default function Navbar() {

  const classes = useStyles();

  return (
    <Box className={classes.nav}>
      <AppBar position="static" >
        <Toolbar className={classes.nav}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <Menu props='left' />
          </IconButton>
          <Button color="inherit" className={classes.icon}>
            <NavLink to='/'>
              <img className={classes.navIcon} src={logo} alt={"logo"} />
            </NavLink>
          </Button>
          <Box className={classes.navList}>
            <Typography variant="h6" className={classes.navItem}>
              <NavLink to='/'>
                Home
              </NavLink>
            </Typography>
            <Typography variant="h6" className={classes.navItem} >
              <NavLink to='/catalog'>
                Catalog
              </NavLink>
            </Typography>
            <Typography variant="h6" className={classes.navItem}>Cart</Typography>
            <Route exact path="/goods/:product_type">
                <SearchBar className={classes.navSearch} />
            </Route>

          </Box>



        </Toolbar>
      </AppBar>
    </Box>
  );
}


