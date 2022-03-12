import React, { useContext } from 'react';
import styled from "styled-components";
import { recentData } from '../navbar/navbar';
import { useNavigate } from 'react-router-dom';
import Api from '../../services/Api';
import { context } from '../context/context';

const RepContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
    font-family: 'Roboto', sans-serif;
    grid-area: repository;
    margin-top: 50px;
    border-radius: 12px;
    background-color: #ddd;
    width: 85%;
    height: 80vh;
`
const Title = styled.h1`
    font-size: 30px;
    font-weight: 700;
    margin-top: 10px;
    color: rgb(40, 40, 40);
    width: 100%;
    text-align: center;
    height: 30px;
    @media only screen and (max-width:475px){
        font-size: 18px;
    }
`
const ListRepContainer = styled.div`
    width: 97%;
    height: 85%;
    padding: 10px;
    overflow-y: scroll;
    background-color: #ddd;
    @media only screen and (max-width:952px){
        width:90%;
    }
`
const Users = styled.div`
    background: #6D8299;
    display: flex;
    padding: 10px;
    margin-bottom: 15px;
    margin-left: 40px;
    cursor: pointer;
    border-radius: 16px;
    transition: ease .4s;
    h2 {
        margin-left: 50px;
        font-size: 28px;
        width: 100%;
        overflow: hidden;
        color: rgb(226, 226, 226);
    }
    img {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        border: 5px solid #F4F9F9;
    }
    &:hover{
        background-color: #6d9984;
        transition: ease .4s;
        color: #F4F9F9;
    }
    @media only screen and (max-width:952px){
        img {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            border: 3px solid #F4F9F9;
        }  
        h2 {
            margin-left: 10px;
            font-size: 18px;
        }
    }
    @media only screen and (max-width:475px){
        margin-left: 0px;
        img{
            width: 40px;
            height: 40px;
            border: 2px solid #F4F9F9;
        }
        h2 {
            font-size: 8px;
        }
    }
`
function HistoricContainer(){
    const cont = useContext(context);
    const history = useNavigate();
    function handleOnClick(route){
        return history(route);
    }
    async function getUserData(value){
        try {
            const response = await Api.get(`/${value}`);
            const repos = await Api.get(`/${value}/repos`);
            cont.setUserContext(response.data);
            cont.setRepos(repos.data);
        } catch(erro){
            console.log(erro);
        }
        handleOnClick('/moreInfo');
    }
    return(
        <RepContainer>
            <Title>Histórico de Pesquisa</Title>
            <ListRepContainer>
                {recentData.map((recent, index) =>(
                    <Users onClick={() => getUserData(recent.login)} key={index}>
                        <img src={recent?.avatar_url} alt={recent?.login} />
                        <h2>Nome: <br />
                        {recent?.name}</h2>
                        <h2>Username: <br />
                        {recent?.login}</h2>
                        <h2>Localidade: <br />
                        {recent?.location}</h2>
                    </Users>
                ))}
            </ListRepContainer>
        </RepContainer>
    );
}
export default HistoricContainer;