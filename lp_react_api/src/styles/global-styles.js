import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin:0;
    padding: 0;
  }
  body {
    ${({ mainTheme }) => css`
      background: ${mainTheme.cor1};
    `}
  }
`;
