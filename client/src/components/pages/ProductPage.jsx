import React from 'react';
import {Container} from "@material-ui/core";
import Header from "../assets/Header/Header";
import Body from "../assets/Body/Body";
import Footer from "../assets/Footer/Footer";
import Product from "../assets/Product/Product";



const ProductPage = () => {
  return (
    <Container>
      <Header />
      <Body>

        <Product />
      </Body>
      <Footer />
    </Container>
  );
};

export default ProductPage;