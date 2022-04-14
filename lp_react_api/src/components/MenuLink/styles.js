import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    display: block;
    font-size: ${theme.font.sizes.small};
    text-decoration: none;
    padding: ${theme.spacings.small};
    color: ${theme.colors.promaryColor};
    font-weight: 400;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      height: 0.2rem;
      width: 0px;
      background-color: ${theme.colors.secondaryColor};
      transition: all 300ms ease-in-out;
    }
    &:hover::after {
      left: 25%;
      width: 50%;
    }
  `}
`;
