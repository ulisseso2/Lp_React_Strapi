import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css``}
`;

export const Title = styled.div`
  ${({ theme }) => css``}
`;
export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    align-items: center;
  `}
`;
export const GridImg = styled.div`
  ${({ theme }) => css`
    overflow: hidden;
    margin: 10px;
  `}
`;

export const Img = styled.img`
  ${({ theme }) => css`
    max-width: 100%;
    transition: all 300ms ease-in-out;
    &:hover {
      transform: scale(1.2) rotate(10deg);
    }
  `}
`;
