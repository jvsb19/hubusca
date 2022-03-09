import styled from 'styled-components';

export const Info = styled.div`
    width: 85%;
    height: 80vh;
    background-color: #423F3E;
    border-bottom: 10px solid #423F3E;
    display: grid;
    grid-template:
        " photo repository " 50%
        " moreInfo repository " 50%
        / 50% 1fr 0%;
`;

const ContainerMoreInfo = props => (
    <Info>
        {props.children}
    </Info>
);

export default ContainerMoreInfo;