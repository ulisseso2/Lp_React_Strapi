import styled from 'styled-components';

export const Container = styled.div`

`;

export const Title = styled.div`

`;
export const Grid = styled.div`

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    align-items: center;

`;
export const GridImg = styled.div`

    overflow: hidden;
    margin: 10px;

`;

export const Img = styled.img`

    max-width: 100%;
    transition: all 300ms ease-in-out;
    &:hover {
      transform: scale(1.2) rotate(10deg);
    }

`;
