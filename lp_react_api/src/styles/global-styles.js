import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  * {
    margin:0;
    padding: 0;
  }
  body {
    ${({ theme }) => css`
      background-color: ${theme.colors.darkPrimary};
    `}


  }
  h1 {
    font-family: font-family: ;
  }
`;
// Estilo global da aplicação
