import React, { Fragment } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import styled from "styled-components";
import ListCards from '../components/ListCards';

export const Wrapper = styled.div`
    height:100%;
    margin: 0;
    display: flex;
    flex-direction: column;
`;

export const Container = styled.div`
    width: 100%;
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Home = () => {

    return ( 
        <Fragment>
            <Header />
            <Wrapper>
                <Container>
                    <SearchBar filterType={"Se puede buscar por nombre"}/>
                </Container>
            </Wrapper>
            <ListCards />
        </Fragment>
    );
}
 
export default Home;