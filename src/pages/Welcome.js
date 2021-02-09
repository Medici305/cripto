import React from 'react';
import Nav from '../components/Nav';
// Style
import styled from 'styled-components';
// Image
import bg from '../img/cyclone.jpg';

const Welcome = () => {
    return (
        <StyleWelcome>
            <Nav />
            <Content>
                <Center>
                    <h1>Welcome</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptatum corrupti numquam mollitia quam aperiam minus quasi, odit voluptatibus quae.</p>
                    <Box>

                    </Box>
                    <button>Explore</button>
                </Center>
            </Content>
        </StyleWelcome>
    )
}

const StyleWelcome = styled.div`
    height: 100vh;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`;

const Content = styled.div`
    border: 1px solid white;
    min-height: 88vh;
    padding: 2rem 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Center = styled.div`
    background: rgba(0,0,0,.5);
    border-radius: 1rem;
    flex: 1;
    text-align: center;
    padding: 1rem;
    h1 {
        font-size: 6rem;
        border: 1px solid #fff;
    }
    p {
       margin: 2rem 0rem 
    }
    button {
        border: 2px solid #fff;
        font-size: 1.5rem;
        padding: 1rem 2rem;
        margin-top: 1rem;
        border-radius: 3rem;
        color: #fff;
        background: transparent;
        cursor: pointer;
    }
`;

const Box = styled.div`
    border: 2px solid #fff;
    height: 30vh;
`;

export default Welcome;
