import { useState } from 'react';
import { Heading } from '../../components/Heading';
import * as Styled from './styles';

export const Home = () => {
  const [text, settext] = useState('Hi');

  return (
    <Styled.Container>
      <Styled.H1 color={text}>Hello, World!</Styled.H1>
      <p>{text}</p>
      <input
        type="text"
        onChange={(e) => settext(e.target.value)}
        placeholder="Write a color in English"
      />
      <Heading colorDark={false} as={'h1'} size={'huge'} uppercase={true}>
        Brasil
      </Heading>
    </Styled.Container>
  );
};

//Meu componente princial, minha home
