import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { mainTheme } from '../../styles/themes';
import * as Styled from './styles';

export const Home = () => {
  const [texto, settexto] = useState('olá');

  return (
    <Styled.Container>
      <ThemeProvider theme={mainTheme}>
        <Styled.H1 color={texto}>Hello, World!</Styled.H1>
        <p>{texto}</p>
        <input type="color" onChange={(e) => settexto(e.target.value)} />
      </ThemeProvider>
    </Styled.Container>
  );
};
