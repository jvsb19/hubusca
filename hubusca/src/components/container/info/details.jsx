import styled from 'styled-components';

const InfoContainer = styled.div`
    width 100%;
    height: 100%;
    text-align: center;
`;

const Name = styled.h1`
    width: 100%;
    height: 10%;
    font-size: 38px;
    font-weight: 700;
    color: black;
`;

const UserName = styled.h1`
    margin-top: 30px;
    width: 100%;
    font-size: 35px;
    font-weight: 500;
    color: black;
`;

const Local = styled.p`
    margin-top: 30px;
    width: 100%;
    font-size: 25px;
    color: black;
`;


const UserInfo = props =>{
    return(
        <InfoContainer>
            <Name>Nome: {props?.name}</Name>
            <UserName>Username: {props?.login}</UserName>
            <Local>Localidade: {props?.location}</Local>
        </InfoContainer>
    );
}
export default UserInfo;