import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        transition: all .5s ease-in-out;
        font-family: 'Lato';
    }

    h1 {
        font-family: 'Cookie', sans-serif;
        font-size: 3rem;
    }
`

export default GlobalStyle;