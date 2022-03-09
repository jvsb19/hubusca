import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const ImgContainer = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

`;

const Photo = styled.img`
    width: 25%;
    height: 60%;
    border-radius: 50%;
    border: 10px solid black;
    transition: ease .4s;
    &:hover{
        transform: scale(1.05);
        transition: ease .4s;
        cursor: pointer;
    }

`;

const UserPhoto = props => {
    const history = useNavigate();
    function handleOnClick(route){
        return history(route);
    }

    return(
        <ImgContainer onClick={() => handleOnClick('/more')}>
            <Photo src={props?.url} alt={props.alternativeText}></Photo>
        </ImgContainer>
    );
}

export default UserPhoto;