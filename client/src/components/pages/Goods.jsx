import React from 'react';
import Body from "../assets/Body/Body";
import Header from "../assets/Header/Header";
import Footer from "../assets/Footer/Footer";
import {Container} from "@material-ui/core";
import GoodsList from "../assets/GoodsList/GoodsList";


const Goods = (props) => {

    return (
        <Container>
            <Header />
            <Body>
                <GoodsList url={props.match.url} />
            </Body>
            <Footer />
        </Container>
    );
};

export default Goods;