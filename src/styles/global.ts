import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
  }

  body{
    background: ${(props) => props.theme['gray-100']};
    color: ${(props) => props.theme['gray-800']};

    -webkit-font-smoothing: antialiased;
  }

  body, input, button{
    font-size: 16px;
    font-family: "Roboto", sans-serif;
  }
  h1{
   
    font-weight: 300;
    font-size: 2rem;
    color: #262626 !important;
   
  }

`;
