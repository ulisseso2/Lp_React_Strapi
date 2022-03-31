import { useEffect, useState } from 'react';
import * as Styled from './styles';

export const Home = () => {
  const [texto, settexto] = useState('olá');

  return (
    <Styled.Container>
      <Styled.H1 color={'red'}>Hello, World!</Styled.H1>
      <p>{texto}</p>
      <input
        type="text"
        onChange={(e) => settexto(e.target.value)}
        placeholder="Write a color in English"
      />
    </Styled.Container>
  );
};
