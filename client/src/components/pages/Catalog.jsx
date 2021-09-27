import React from 'react';
import Body from "../assets/Body/Body";
import Header from "../assets/Header/Header";
import Footer from "../assets/Footer/Footer";
import {Container} from "@material-ui/core";
import Cardlist from "../assets/Cardlist/Cardlist";


const Catalog = () => {
  return (
    <Container>
      <Header/>
      <Body>
        <Cardlist/>
      </Body>
      <Footer/>
    </Container>
  );
};

export default Catalog;