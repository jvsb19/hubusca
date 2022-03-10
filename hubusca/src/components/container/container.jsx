import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #8687A0;
    display: flex;
    align-items: center;
    flex-direction: column;
`

const HomeContainer = props => (
    <Container>
        {props.children}
    </Container>
);

export default HomeContainer;