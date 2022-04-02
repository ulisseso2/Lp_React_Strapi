import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.hot};
    font-family: ${theme.fonts.family.main};
  `}
  padding: 10px;
`;
export const H1 = styled.h1`
  ${({ theme }) => css`
    font-family: ${theme.fonts.family.title};
    font-size: 30px;
  `}
  ${(props) => css`
    color: ${props.color};
  `}
`;
// Folha de estilos exclusiva da home
