import styled from 'styled-components';
import { css } from 'styled-components';

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.family.title};
  font-size: 50px;
  ${({ theme, light }) => css`
    color: ${light ? theme.colors.hot : theme.colors.dark};
  `};
`;
// styled component do componente Heading
