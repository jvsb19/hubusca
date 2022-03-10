import React from 'react';
import styled from "styled-components";

const RepContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap');
    font-family: 'Nunito', sans-serif;
    grid-area: repository;
`
const Title = styled.h1`
    font-size: 30px;
    font-weight: 700;
    margin-top: 10px;
    color: rgb(40, 40, 40);
    width: 100%;
    text-align: center;
    height: 30px;
`
const ListRepContainer = styled.div`
    width: 95%;
    height: 85%;
    padding: 10px;
    overflow-y: scroll;
`
const Repo = styled.div`
    background: #6D8299;
    border-radius: 12px;
    padding: 10px;
    margin-bottom: 10px;
    overflow: hidden;
    cursor: pointer;
    h2 {
        font-size: 25px;
        font-weight: 700;
        width: 100%;
        overflow: hidden;
        color: rgb(226,226,226);
    }
    h3{
        font-size 25px;
        font-weight: 700;
        width: 100%;
        overflow: hidden;
        color: rgb(226,226,226);
    }
    h4{
        font-size 20px;
        font-weight: 400;
        width: 100%;
        overflow: hidden;
        color: rgb(226,226,226);
    }
    p {
        font-size: 20px;
        font-weight: 400;
        color: rgb(226,226,226);
        width: 100%;
        height: 30px;
        margin-bottom: 20px;
    }
    &:hover{
        background-color: #6d9984;
        transition: ease .4s;
        color: #F4F9F9;
    }
`
const RepositoryContainer = props =>{
    return(
        <RepContainer>
            <Title>Repositórios de {(props.name)?.split(' ')[0]}</Title>
            <ListRepContainer>
                {(props?.repos).map(repo => (
                    <Repo onClick={() => window.open(repo?.html_url)} key={repo?.id}>
                        <h2>Nome do projeto: {repo?.name}</h2>
                        <h3>Linguagem utilizada: {repo?.language}</h3>
                        <h4>Criado em: {repo?.created_at}</h4>
                        <h4>Última postagem: {repo?.updated_at}</h4>
                        <p>Descrição: {repo?.description}</p>
                    </Repo>
                ))}
            </ListRepContainer>
        </RepContainer>
    );
}

export default RepositoryContainer;