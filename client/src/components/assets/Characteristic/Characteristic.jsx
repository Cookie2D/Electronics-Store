import {Box, ListItem, ListItemText} from "@material-ui/core";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    listHeader: {
      background: '#e1f5fe',
      padding: "15px 10px",
    },
  }
));

function Characteristic({items}) {
  const classes = useStyles();
  if (typeof items === "object" && !Array.isArray(items)) {
    const keys = Object.keys(items);
    const values = Object.values(items);

    return values.map((el, i) => {
      if (Array.isArray(el)) {
        return (
          <Box key={i}>
            <ListItemText className={classes.listHeader}>{keys[i]}:</ListItemText>
            <Characteristic items={el}/>
          </Box>
        )
      } else {
        return <ListItem key={i}>&bull; {keys[i]}: {el}</ListItem>
      }
    })
  }

  if (Array.isArray(items)) {
    return items.map((el, i) => <Characteristic key={i} items={el}/>)
  }
}

export default Characteristic;