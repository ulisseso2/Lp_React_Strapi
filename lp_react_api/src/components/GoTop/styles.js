import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: red;
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    background-color: red;
  `}
`;
