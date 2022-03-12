import styled from 'styled-components';

export const Info = styled.div`
    margin-top: 50px;
    width: 50%;
    height: 80vh;
    border-radius: 12px;
    background-color: #ddd;
    @media only screen and (max-width:475px){
        width: 85%;
    }
`;

const ContainerInfo = props => (
    <Info>
        {props.children}
    </Info>
);

export default ContainerInfo;