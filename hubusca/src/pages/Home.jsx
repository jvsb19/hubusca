import React from 'react';
import Navbar from '../components/navbar/navbar';
import Container from '../components/container/container';
import ContainerInfo from '../components/container/containerInfo';
import Photo from '../components/container/info/photo';
import UserInfo from '../components/container/info/details';



function Home(){
    return(
        <Container>
            <Navbar />
            <ContainerInfo>
                <Photo url="https://avatars.githubusercontent.com/u/101229148?v=4" alternativeText="image" />
                <UserInfo name="João Vitor" login="jvsb19" location="Rio de Janeiro" />
            </ContainerInfo>
        </Container>
    );
}
export default Home