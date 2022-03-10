import React, {useContext} from 'react';
import { context } from '../components/context/context';
import Navbar from '../components/navbar/navbar';
import Container from '../components/container/container';
import ContainerMoreInfo from '../components/container/containermoreinfo';
import Photo from '../components/container/info/photo';
import UserMoreInfo from '../components/container/info/moredetails';
import RepositoryContainer from '../components/container/info/repository';
import { Navigate } from 'react-router-dom';

const MoreInfo = props => {
    const cont = useContext(context);
    return(
        <Container>
            <Navbar />
            {cont.userContext?.login ?
            <React.Fragment>
                <ContainerMoreInfo>
                    <Photo url={cont.userContext?.avatar_url} alternativeText={cont.userContext?.login} />
                    <RepositoryContainer name={cont.userContext?.name} repos={cont.repos} />
                    <UserMoreInfo name={cont.userContext?.name} login={cont.userContext?.login} location={cont.userContext?.location} id={cont.userContext?.id} followers={cont.userContext?.followers} repos={cont.userContext?.public_repos}  />
                </ContainerMoreInfo>
            </React.Fragment>
            : <Navigate to="/" />}
        </Container>
    );
}

export default MoreInfo;