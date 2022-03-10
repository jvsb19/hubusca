import styled from 'styled-components';

const InfoContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
    font-family: 'Roboto', sans-serif;
    grid-area: moreInfo;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 40% 20% 40%;
    align-items: center;
    color: rgb(40, 40, 40);

    h1{
        margin-left: 30px;
        font-size: 38px;
        font-weight: 700;
    }
    h2{
        margin-left: 30px;
        font-size: 32px;
        font-weight: 500;
    }
    p{
        margin-left: 30px;
        font-size: 32px;
    }
`;
const UserMoreInfo = props =>{
    return(
        <InfoContainer>
            <h1>Usuário: {props?.login}</h1>
            <h2>Nome: {props?.name}</h2>
            <p>Localidade: {props?.location}</p>
            <p>ID: {props?.id}</p>
            <p>Seguidores: {props?.followers}</p>
            <p>Repositórios: {props?.repos}</p>
        </InfoContainer>
    );
}
export default UserMoreInfo;