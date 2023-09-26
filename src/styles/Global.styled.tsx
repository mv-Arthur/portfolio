import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";
export const GlobalStyle = createGlobalStyle`

    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color:${theme.colors.font};
        line-height: 1.2;
        &::-webkit-scrollbar {
            width: 3px;
            background: transparent;
        }
        &::-webkit-scrollbar-track {
            background-color: ${theme.colors.primaryBg} 
        }
        &::-webkit-scrollbar-thumb {
            width: 3px;
            background-color: ${theme.colors.accent};
            border-radius:10px ;
            height: 30px;
        }
    }

    a {
        text-decoration: none;
        color: ${theme.colors.font};
    }

    ul {
        list-style: none;
    }

    button {
        background-color: unset;
        border:none;
        cursor: pointer;
        color: ${theme.colors.font}
    }

    section {
        padding: 100px 0;
    }

    section:nth-of-type(2n+2) {
        background-color: ${theme.colors.secondaryBg};
    }

    section:nth-of-type(2n+1) {
        background-color: ${theme.colors.primaryBg};
    }

    h3 {
        font-family: "Josefin Sans", sans-serif;
        font-size: 16px;
        font-weight: 700;
        letter-spacing: 1px;
    }

    p {
        font-size: 14px;
        font-weight: 400;  
        line-height: 1.4;
    }

    

`;
