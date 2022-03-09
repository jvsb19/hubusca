import styled from 'styled-components';

const Container = styled.main`
    width: 100%;
    height: 100vh;
    background-color: #B2B1B9;
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