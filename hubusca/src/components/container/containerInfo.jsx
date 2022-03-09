import styled from 'styled-components';

export const Info = styled.div`
    width: 85%;
    height: 80vh;
    background-color: #423F3E;
    border-bottom: 10px solid #423F3E;
`;

const ContainerInfo = props => (
    <Info>
        {props.children}
    </Info>
);

export default ContainerInfo;