import React from 'react';
// Style
import styled from 'styled-components';
// Fontawesome 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-regular-svg-icons'
// Link
//import { Link } from 'react-router-dom';
// Images
import logo from '../img/blockchain.svg';

const Nav = () => {
    return (
        <StyleNav>
            <Title>
                <img src={logo} alt="logo" />
                <h1>| Criptoe</h1>
            </Title>
            <div className="dark-mode">
                <FontAwesomeIcon size='2x' icon={faMoon} />
            </div>
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

export default Nav;