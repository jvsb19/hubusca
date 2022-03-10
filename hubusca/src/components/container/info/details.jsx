import styled from 'styled-components';

const InfoContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
    font-family: 'Roboto', sans-serif;
    width 100%;
    text-align: center;

    h1{
        margin-top: 40px;
    }
    p{
        margin-top: 40px;
    }
`;
const Name = styled.h1`
    width: 100%;
    height: 10%;
    font-size: 38px;
    font-weight: 500;
    color: black;
`;
const UserName = styled.h1`
    margin-top: 30px;
    width: 100%;
    font-size: 38px;
    font-weight: 700;
    color: black;
`;
const Local = styled.h1`
    margin-top: 30px;
    width: 100%;
    font-size: 38px;
    font-weight: 500;
    color: black;
`;

const UserInfo = props =>{
    return(
        <InfoContainer>
            <UserName>Usuário: {props?.login}</UserName>
            <Name>Nome: {props?.name}</Name>
            <Local>Localidade: {props?.location}</Local>
        </InfoContainer>
    );
}
export default UserInfo;