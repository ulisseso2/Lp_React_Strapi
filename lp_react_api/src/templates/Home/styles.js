import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primaryColor};
    color: ${theme.colors.white};
    font-family: ${theme.font.family.default};
  `}
  padding: 10px;
`;
export const H1 = styled.h1`
  ${({ theme }) => css`
    font-family: ${theme.font.family.secondary};
    font-size: 30px;
  `}
  ${(props) => css`
    color: ${props.color};
  `}
`;
// Folha de estilos exclusiva da home
