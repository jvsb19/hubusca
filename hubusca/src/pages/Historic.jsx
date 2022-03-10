import React from 'react';
import Navbar from '../components/navbar/navbar';
import ContainerInfo from '../components/container/container';
import HistoricContainer from '../components/container/info/historicdata';
import Container from '../components/container/container';

const Historic = props => {
    return(
        <Container>
            <Navbar />
            <React.Fragment>
                <ContainerInfo>
                    <HistoricContainer />
                </ContainerInfo>
            </React.Fragment>
        </Container>
    );
}

export default Historic;