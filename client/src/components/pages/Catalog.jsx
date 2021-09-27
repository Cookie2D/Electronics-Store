import React from 'react';
import Body from "../assets/Body/Body";
import Header from "../assets/Header/Header";
import Footer from "../assets/Footer/Footer";
import {Container} from "@material-ui/core";
import Banner from "../assets/Banner/Banner";




const Catalog = () => {
    return (
        <Container>
            <Header />
            <Body>
                <Banner/>
                 </Body>
            <Footer />
        </Container>
    );
};

export default Catalog;