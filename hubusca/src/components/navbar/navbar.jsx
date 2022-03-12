import React, {useState, useContext} from 'react';
import Api from '../../services/Api';
import {context} from '../context/context';
import styled from 'styled-components';
import {CgSearch} from 'react-icons/cg';
import {FaHistory} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const NavbarSection = styled.header`
    margin: 0px;
    width: 100%;
    min-height: 10vh;
    background: #2C2E43;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media only screen and (max-width:682px){
        justify-content: space-around;
    }
`;
const NavbarTitle = styled.h1`
    margin: 0px;
    margin-left: 40px;
    color: #E5E5E5;
    font-size: 44px;
    font-weight: 500;
    cursor: pointer;
    @media only screen and (max-width:682px){
        font-size 30px;
        margin-left: 0px;
    }
    @media only screen and (max-width:475px){
        font-size 22px;
        margin-left: 10px;
    }
`;
const NavbarInputDiv = styled.div`
    padding: 10px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const NavbarInput = styled.input`
    width: 300px;
    height: 30px;
    border-radius: 15px;
    border: none;
    padding: 0 16px;
    background-color: rgb(226, 226, 226);
    color: #777;
    transition: .4s ease;
    &:focus {
        outline: none;
        width: 350px;
        transition: .4s ease;
    }
    @media only screen and (max-width:682px){
        width: 120px;
        margin-right: 20px;
        &:focus {
            width: 150px;
        }
    }
    @media only screen and (max-width:475px){
        width: 60px;
        &:focus {
            width: 70px;
        }
    }
`;
const NavbarSearchBtn = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 15px;
    border: none;
    background: #595260;
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgb(226, 226, 226);
    transition: ease .4s;
    &:hover{
        transform: scale(1.3);
        transition: ease .4s;
        cursor: pointer;
    }
    @media only screen and (max-width:682px){
        margin-left 0px;
    }
`;
const NavbarHistoricBtn = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 15px;
    border: none;
    background: #595260;
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgb(226, 226, 226);
    transition: ease .4s;
    &:hover{
        transform: scale(1.3);
        transition: ease .4s;
        cursor: pointer;
    }
    @media only screen and (max-width:475px){
        margin-left: 4px;
    }
`;

export const recentData = [];
const Navbar = () => {
    const [user, setUser] = useState([]);
    const cont = useContext(context);
    const history = useNavigate();
    function handleOnClick(route){
        return history(route);
    }
    async function getUserData(){
        try {
            const response = await Api.get(`/${user}`);
            const repos = await Api.get(`/${user}/repos`);
            cont.setUserContext(response.data);
            cont.setRepos(repos.data);
            recentData.unshift(response.data);
        } catch(erro){
            console.log(erro);
        }
        handleOnClick('/');
    }
    return(
        <NavbarSection>
            <NavbarTitle onClick={() => handleOnClick('/')}>HUBusca</NavbarTitle>
            <NavbarInputDiv>
                <NavbarInput value={user} onChange={e => setUser(e.target.value)} />
                <NavbarSearchBtn onClick={getUserData}>
                    <CgSearch size={18} />
                </NavbarSearchBtn>
                <NavbarHistoricBtn onClick={() => handleOnClick('/historic')}>
                    <FaHistory size={18} />
                </NavbarHistoricBtn>
            </NavbarInputDiv>
        </NavbarSection>
    );
};

export default Navbar;