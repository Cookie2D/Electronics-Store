import React, {useEffect, useState} from 'react';
import {Divider, Grid, Paper, Tab, Tabs, Typography} from "@material-ui/core";
import TabPanel from "../TabPanel/TabPanel";
import Loader from "../Loader/Loader";
import PropTypes from "prop-types";
import {createStyles, makeStyles} from "@material-ui/styles";
import axios from 'axios';

const TabList = ({axiosUrl}) => {
  const [currentTab, setCurrentTab] = useState(0);
  const [tabs, setTabs] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  function handleChange(e, value) {
    setCurrentTab(value);
  }

  const useStyles = makeStyles(() => createStyles({
    divider: {
      margin: '15px 0',
    },
    Container: {
      marginTop: 15,
      display: 'flex',
      margin: '0 auto',
    },
    paper: {
      padding: 20,
      ['@media (max-width:400px)']: { // eslint-disable-line no-useless-computed-key
        fontSize: 6,
        padding: 0
      }
    }
  }));


  useEffect(() => {
    if (localStorage.tabs) {
      setTabs(JSON.parse(localStorage.tabs));
      setIsLoaded(true)
    } else {
      axios.get(axiosUrl)
        .then(res => res.ok
          ? res.json()
          : Promise.reject('Server error ' + res.status)
        )
        .then(data => {
          localStorage.tabs = JSON.stringify(data);
          setTabs(data);
          setIsLoaded(true);
        }).catch(e => {
        setTabs([]);
        setIsLoaded(true)
      })
    }


  }, [axiosUrl])


  const classes = useStyles();
  return (
    <Grid className={classes.Container}>
      <Paper elevation={4} className={classes.paper}>
        {tabs.length === 0 && isLoaded && <Typography variant="h2">Items not found</Typography>}
        <Loader loaded={isLoaded}>
          <Grid>
            <Tabs
              value={currentTab}
              onChange={handleChange}
              centered
              textColor="primary"
              indicatorColor="primary">
              {tabs.map(el =>
                <Tab key={el.id} label={el.title}/>)
              }
            </Tabs>
            <Divider className={classes.divider}/>
            {tabs.map(el => el.id === currentTab &&
              <TabPanel key={el.id} panel={el}/>)
            }
          </Grid>
        </Loader>
      </Paper>
    </Grid>
  );
};

TabList.propTypes = {
  axiosUrl: PropTypes.string,
}

export default TabList;