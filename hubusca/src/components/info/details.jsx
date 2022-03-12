import styled from 'styled-components';

const InfoContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
    font-family: 'Roboto', sans-serif;
    width 100%;
    text-align: center;

    h1{
        margin-top: 40px;
        width: 100%;
        font-size: 38px;
        color: rgb(40, 40, 40);
    }
    @media only screen and (max-width:475px){
        h1{
            font-size 28px;
        }
    }
`;
const Name = styled.h1`
    height: 10%;
    font-weight: 500;
`;
const UserName = styled.h1`
    font-weight: 700;
`;
const Local = styled.h1`
    font-weight: 500;
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