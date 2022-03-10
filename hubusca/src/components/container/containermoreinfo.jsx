import styled from 'styled-components';

export const Info = styled.div`
    margin-top: 50px;
    width: 85%;
    height: 80vh;
    border-radius: 12px;
    background-color: #ddd;
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