import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.hot};
    font-family: ${theme.fonts.main};
  `}
  padding: 10px;
`;
export const H1 = styled.h1`
  ${(props) => css`
    color: ${props.color};
    font-size: 30px;
  `}
`;
