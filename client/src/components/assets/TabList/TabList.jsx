import React, {useEffect, useState} from 'react';
import {Divider, Grid, Paper, Tab, Tabs, Typography} from "@material-ui/core";
import TabPanel from "../TabPanel/TabPanel";
import Loader from "../Loader/Loader";
import PropTypes from "prop-types";
import {createStyles, makeStyles} from "@material-ui/styles";

const TabList = ({fetchUrl}) => {
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
    }
  }));


  useEffect(() => {
    fetch(fetchUrl)
      .then(res => res.ok
        ? res.json()
        : Promise.reject('Server error ' + res.status)
      )
      .then(data => {
        setTabs(data);
        setIsLoaded(true);
      }).catch(e => {
      setTabs([]);
      setIsLoaded(true)
    })

  }, [fetchUrl])


  const classes = useStyles();
  return (
    <Grid className={classes.Container}>
      <Paper elevation={4} style={{maxWidth: 500, padding: 25}}>
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
  fetchUrl: PropTypes.string,
}

export default TabList;