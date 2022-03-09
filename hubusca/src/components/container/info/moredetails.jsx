import styled from 'styled-components';

const InfoContainer = styled.div`
    width 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: right;
`;

const Name = styled.h1`
    width: 100%;
    height: 10%;
    font-size: 38px;
    font-weight: 700;
    color: black;
`;

const UserName = styled.h1`
    width: 100%;
    font-size: 35px;
    font-weight: 500;
    color: black;
`;

const Description = styled.p`
    width: 70%;
    text-align: justify;
    font-size: 22px;
    color: black;
    overflow: hidden;
`;

const Local = styled.p`
    width: 100%;
    font-size: 22px;
    color: black;
`;

const ID = styled.p`
    width: 100%;
    font-size: 22px;
    color: black;
`;

const Followers = styled.p`
    width: 100%;
    font-size: 22px;
    color: black; 
`;

const Repository = styled.p`
    width: 100%;
    font-size: 22px;
    color: black;
    &:hover{
        cursor: pointer;
    }
`;



const UserMoreInfo = props =>{
    return(
        <InfoContainer>
            <Name>Nome: {props?.name}</Name>
            <UserName>Username: {props?.login}</UserName>
            <Description>Descrição: {props?.bio}</Description>
            <Local>Localidade: {props?.location}</Local>
            <ID>ID: {props?.id}</ID>
            <Followers>Seguidores: {props?.followers_url}</Followers>
            <Repository>Repositórios: {props?.public_repos}</Repository>
        </InfoContainer>
    );
}
export default UserMoreInfo;