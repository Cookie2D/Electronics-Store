import * as React from 'react';
import {Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import {Link} from "react-router-dom";


const useStyles = makeStyles({
    root: {
        width: '345px',
        // height: '535px',
        padding: '12px',
    },
    media: {
        height: '200px',
        backgroundPosition: 'center',
        backgroundSize: 'contain'
    },
    img: {
        height: "auto",
    },
    price: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    info: {
        display: 'flex',
        flexDirection: 'column'
    },
    link: {
        textDecoration: 'none',
        color: '#fff',
        padding: '0 25px'
    },
    btn: {
        marginTop: '2rem'
    },
    descript: {
        height: '200px',
        overflow: 'hidden'
    }
});

export default function GoodsItem (props) {
    const classes = useStyles();
    let url = `${props.info.type}/${props.info.id}`;

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.info.img}
                    title="Contemplative Reptile"

                />
                <CardContent className={classes.descript}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.info.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.info.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.info}>
                <Box className={classes.price}>
                    <Typography gutterBottom variant="h6" component="h2" style={{margin: 0}}>
                        Price
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h2" style={{margin: 0}}>
                        {props.info.price}
                    </Typography>
                </Box>
                <Button className={classes.btn} variant="contained" color='primary'>
                    <Link to={url} className={classes.link}>
                        VIEW
                    </Link>
                </Button>
            </CardActions>
        </Card>
    );
}