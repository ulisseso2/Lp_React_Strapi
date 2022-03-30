import styled, { css } from 'styled-components';

export const Container = styled.div`
  background-image: url(https://res.cloudinary.com/odisseia/image/upload/v1648590808/fundo-da-textura-da-cortic%CC%A7a-11979169_nnzyi6.jpg);
  padding: 10px;
`;
export const H1 = styled.h1`
  ${(props) => css`
    color: ${props.color};
    font-size: 30px;
  `}
`;
