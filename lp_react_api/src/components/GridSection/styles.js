import styled, { css } from 'styled-components';

import { Title as HeadingContainer } from '../Heading/styles';
import { Container as Textcomponent } from '../Textcomponent/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    ${Textcomponent} {
      margin-bottom: ${theme.spacings.large};
    }
  `}
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    counter-reset: grid-counter;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: ${theme.spacings.large};
    overflow: hidden;
    width: 100%;

    @media ${theme.font.media.ltmedium} {
      grid-template-columns: 1fr;
    }
  `}
`;
export const GridElement = styled.div`
    ${HeadingContainer} {
      position: relative;
      left: 5rem;
    }
    ${HeadingContainer}::before {
      counter-increment: grid-counter;
      content: counter(grid-counter);
      position: absolute;
      font-size: 6rem;
      font-weight: 900;
      left: -4rem;
      top: -1.5rem;
      transform: rotate(7deg);
    }

`;
