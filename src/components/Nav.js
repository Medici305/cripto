import React from 'react';
// Style
import styled from 'styled-components';
// Fontawesome 
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faMoon } from '@fortawesome/free-regular-svg-icons'
// Link
//import { Link } from 'react-router-dom';
// Images
import logo from '../img/blockchain.svg';
// hover Animation 
import "../../node_modules/hover.css/css/hover.css";

const Nav = () => {
    return (
        <StyleNav>
            <Title>
                <img src={logo} alt="logo" />
                <h1>| Criptoe</h1>
            </Title>
            <Unlock>
                <button className='hvr-pulse'>Explore</button>
            </Unlock>
        </StyleNav>
    )
}

const StyleNav = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 10vh;
    padding: .5rem 5rem;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1);
    img {
        width: 3.5rem;
        margin-right: .5rem;
    }
    svg {
        cursor: pointer;
        &:hover {
            color: #535353;
        }
    }
`;

const Title = styled.div`
    display: flex;
`;

const Unlock = styled.div`
        button {
        border: 2px solid #fff;
        font-size: 1.5rem;
        padding: .5rem 1.5rem;
        margin-top: 1rem;
        border-radius: 3rem;
        color: #fff;
        background: transparent;
        cursor: pointer;
    }
`;

export default Nav;