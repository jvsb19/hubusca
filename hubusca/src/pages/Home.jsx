import React, {useContext} from 'react';
import { context } from '../components/context/context';
import Navbar from '../components/navbar/navbar';
import Container from '../components/container/container';
import ContainerInfo from '../components/container/containerInfo';
import Photo from '../components/info/photo';
import UserInfo from '../components/info/details';

function Home(){
    const cont = useContext(context);
    return(
        <Container>
            <Navbar />
            {cont.userContext?.login ?
            <React.Fragment>
                <ContainerInfo>
                    <Photo url={cont.userContext?.avatar_url} alternativeText={cont.userContext?.login}/>
                    <UserInfo name={cont.userContext?.name} login={cont.userContext?.login} location={cont.userContext?.location} />
                </ContainerInfo>
            </React.Fragment>
            : undefined }
        </Container>
    );
}
export default Home