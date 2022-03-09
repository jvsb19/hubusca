import React from 'react';
import styled from "styled-components";

export const RepContainer = styled.div`
    grid-area: repository;
`
export const Title = styled.h1`
    font-size: 20px;
    font-weight: 700;
    margin-top: 10px;
    color: #fff;
    width: 100%;
    text-align: center;
    height: 30px;
`
export const ListRepContainer = styled.div`
    width: 100%;
    height: 80%;
    padding: 10px;
    overflow-y: scroll;
`
export const Repo = styled.div`
    background: rgba(0,0,0,.05);
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    h2 {
        font-size: 15px;
        width: 100%;
        overflow: hidden;
        color: #fff;
    }
    h3{
        font-size 12px;
        width: 100%;
        overflow: hidden;
        color: #fff;
    }
    h4{
        font-size 12px;
        width: 100%;
        overflow: hidden;
        color: #fff;
    }
    p {
        font-size: 10px;
        font-weight: 400;
        color: #777;
        width: 100%;
        height: 30px;
        overflow: hidden;
        line-height: 1.3;
        margin-top: 10px;
    }
`
const RepositoryContainer = props =>{
    return(
        <RepContainer>
            <Title>Repositórios de {(props.name)?.split(' ')[0]}</Title>
            <ListRepContainer>
                {(props?.repos).map(repo => (
                    <Repo onClick={() => window.location.assign(repo?.html_url)} key={repo?.id}>
                        <h2>Nome do projeto:</h2>
                        <h2>{repo?.name}</h2>
                        <h3>Linguagem utilizada:</h3>
                        <h3>{repo?.language}</h3>
                        <h4>Criado em:</h4>
                        <h4>{repo?.created_at}</h4>
                        <h4>Ultima postagem:</h4>
                        <h4>{repo?.updated_at}</h4>
                        <p>Descrição: {repo?.description}</p>
                    </Repo>
                ))}
            </ListRepContainer>
        </RepContainer>
    );
}

export default RepositoryContainer;