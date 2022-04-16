import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    display: flex;
    text-decoration: none;
    color: inherit;
    align-items: center;
  `}
  img {
    max-height: 4rem;
  }
`;
