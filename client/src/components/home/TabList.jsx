import React, {useEffect, useState} from 'react';
import {Divider, Paper, Stack, Tab, Tabs} from "@material-ui/core";
import TabPanel from "./TabPanel";
import Loader from "./UI/loader/loader";

const TabList = ({fetchUrl}) => {
  const [currentTab, setCurrentTab] = useState(0);
  const [tabs, setTabs] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  function handleChange(e, value) {
    setCurrentTab(value);
  }

  useEffect(() => {
    const json = [
      {
        id: 0,
        title: "Distribute",
        body: "We distribute only quality electrical goods, all customers are satisfied with our product.",
        img: "https://www.owon-smart.com/uploads/8d1c241a.jpg",
      }, {
        id: 1,
        title: "Delivery",
        body: "We deliver our goods on time and without damage. You can view the goods together with the courier. In case of malfunction, return to the store ",
        img: "https://thumbs.dreamstime.com/b/commercial-delivery-van-home-electronics-inside-o-household-kitchen-appliances-concept-d-rendering-isolated-white-133966907.jpg",
      }, {
        id: 2,
        title: "Service",
        body: "Each product has a warranty card for at least six months, in case of failure you can always contact our service center ",
        img: "https://st.focusedcollection.com/18590116/i/650/focused_225281772-stock-photo-interior-electronic-service-centre.jpg",
      }
    ]
    // remove the comments when creating the server (get tabs)

    // fetch(fetchUrl)
    //   .then(res => res.json())
    //   .then(data => {
    //     setTabs(data);
    //     setIsLoaded(true);
    //   })
    setTabs(json); // rm with serv
    setIsLoaded(true); //rm with serv
  }, [])

  return (
    <Stack alignItems="center">
      <Paper elevation={2} style={{maxWidth: 500, padding: 25}}>
        <Loader loaded={isLoaded}>
            <Stack spacing={2}>
              <Tabs value={currentTab} onChange={handleChange} centered>
                {tabs.map(el =>
                    <Tab key={el.id} label={el.title}/>)
                }
              </Tabs>
              <Divider/>
              {tabs.map(el => el.id === currentTab &&
                  <TabPanel key={el.id} body={el.body} img={el.img}/>)
              }
            </Stack>
        </Loader>
      </Paper>
    </Stack>
  );
};

export default TabList;