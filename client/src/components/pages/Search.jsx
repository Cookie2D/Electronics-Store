import React from 'react';
import Header from "../assets/Header/Header";
import Body from "../assets/Body/Body";
import Footer from "../assets/Footer/Footer";
import {Container} from "@material-ui/core";
import SearchList from "../assets/SearchList/SearchList";

const Search = () => {
    return (
        <Container>
            <Header />
            <Body>
                <SearchList />
            </Body>
            <Footer />
        </Container>
    );
};

export default Search;