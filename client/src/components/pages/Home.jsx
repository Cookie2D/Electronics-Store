import React from 'react';
import Body from "../assets/Body/Body";
import Header from "../assets/Header/Header";
import Footer from "../assets/Footer/Footer";
import {Container} from "@material-ui/core";



const Home = () => {
    return (
        <Container>
            <Header />
            <Body />
            <Footer />
        </Container>
    );
};

export default Home;