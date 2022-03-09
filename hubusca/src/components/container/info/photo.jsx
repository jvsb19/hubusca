import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const ImgContainer = styled.div`
    grid-area: photo;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 40%;
`;
const Photo = styled.img`
    margin: 40px 0px;
    width: 300px;
    height: 300px;
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
        <ImgContainer onClick={() => handleOnClick('/moreInfo')}>
            <Photo src={props?.url} alt={props.alternativeText}></Photo>
        </ImgContainer>
    );
}

export default UserPhoto;