import styled from 'styled-components';
import {CgSearch} from 'react-icons/cg';
import {FaHistory} from 'react-icons/fa';

const NavbarSection = styled.header`
    margin: 0px;
    width: 100%;
    height: 10vh;
    background: #2C2E43;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const NavbarTitle = styled.h1`
    margin: 0px;
    margin-left: 40px;
    color: #E5E5E5;
    font-size: 44px;
    font-weight: 500;
    width: 100%;
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
`;
const Navbar = () => (
    <NavbarSection>
        <NavbarTitle>HUBusca</NavbarTitle>
        <NavbarInputDiv>
            <NavbarInput />
            <NavbarSearchBtn>
                <CgSearch size={18} />
            </NavbarSearchBtn>
            <NavbarHistoricBtn>
                <FaHistory size={18} />
            </NavbarHistoricBtn>
        </NavbarInputDiv>
    </NavbarSection>
);

export default Navbar;