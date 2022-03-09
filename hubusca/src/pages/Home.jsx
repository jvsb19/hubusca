import React from 'react';
import Navbar from '../components/navbar/navbar';
import Container from '../components/container/container';
import ContainerInfo from '../components/container/containerInfo';
import styled from 'styled-components';



function Home(){
    return(
        <Container>
            <Navbar />
            <ContainerInfo />
        </Container>
    );
}
export default Home