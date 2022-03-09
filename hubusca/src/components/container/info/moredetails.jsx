import styled from 'styled-components';

const InfoContainer = styled.div`
    grid-area: moreInfo;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 40% 20% 40%;
    align-items: center;

    h1{
        margin-left: 30px;
        font-size: 38px;
        font-weight: 700;
        color: black;
    }
    p{
        margin-left: 30px;
        font-size: 22px;
        color: black;
    }
`;
const UserMoreInfo = props =>{
    return(
        <InfoContainer>
            <h1>Nome:<br />
            {props?.name}</h1>
            <h1>Username:<br />
             {props?.login}</h1>
            <p>Localidade:<br />
            {props?.location}</p>
            <p>ID:<br />
            {props?.id}</p>
            <p>Seguidores: {props?.followers}</p>
            <p>Repositórios: {props?.repos}</p>
        </InfoContainer>
    );
}
export default UserMoreInfo;