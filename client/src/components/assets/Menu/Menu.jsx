import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from "@material-ui/icons/Menu";
import { MenuBook } from "@material-ui/icons";

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    icon: {
        width: '25px',
        height: '25px',
        display: 'flex',
      
    }
});

export default function Menu(props) {
    const side = props.props;
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['Home', 'Catalog', 'Cart'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon><MenuBook /></ListItemIcon>
                        <ListItemText primary={text} style={{ fontSize: "50px" }} />
                    </ListItem>
                ))}
            </List>
            <Divider />
        </div>
    );

    return (
        <div>

            <React.Fragment>
                <MenuIcon className={classes.icon} onClick={toggleDrawer('left', true)} />
                <Drawer anchor={side} open={state[side]} onClose={toggleDrawer(side, false)}>
                    {list(side)}
                </Drawer>
            </React.Fragment>

        </div>
    );
}

