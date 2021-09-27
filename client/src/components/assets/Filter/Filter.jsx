import React, {useEffect} from 'react';
import {
  AppBar,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Toolbar,
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 115,
    borderRadius: 5,
    backgroundColor: 'white',
    padding: 3,
    color: "black"
  },
}));

const Filter = ({goods, setGoods}) => {
  const classes = useStyles();
  const [cost, setCost] = React.useState('');
  const [amount, setAmount] = React.useState('');

  const handleChangeCost = (event) => {
    setCost(event.target.value);
  };
  const handleChangeAmount = (event) => {
    setAmount(event.target.value);
  };

  useEffect(() => {
    let arr = [...goods];
    if (cost) arr = arr.filter(e => e.price > cost);
    if (amount) arr = arr.filter(e => e.amount >= amount);
    setGoods(arr)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cost, amount]);


  return (
    <AppBar position={"relative"}>
      <Toolbar>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="grouped-native-select">Cost</InputLabel>
          <Select defaultValue="" id="grouped-native-select" onChange={handleChangeCost}>
            <MenuItem value={0}>All</MenuItem>
            <MenuItem value={6000}>Medium cost</MenuItem>
            <MenuItem value={10000}>Expensive</MenuItem>
          </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="grouped-select">Amount</InputLabel>
          <Select defaultValue="" id="grouped-select" onChange={handleChangeAmount}>
            <MenuItem value={1}>1 and more</MenuItem>
            <MenuItem value={5}>5 and more</MenuItem>
            <MenuItem value={10}>10 and more</MenuItem>
          </Select>
        </FormControl>
      </Toolbar>
    </AppBar>
  );
};

export default Filter;