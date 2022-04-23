import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    z-index: 6;
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 3rem;
    height: 3rem;
    background: ${theme.colors.primaryColor};
    color: ${theme.colors.white};
    border: none;
    border-radius: 50%;
  `}
`;
