import styled from 'styled-components';
import { css } from 'styled-components';

export const Title = styled.h1`
  ${({ theme, colorDark }) => css`
    color: ${colorDark ? theme.colors.hot : theme.colors.dark};
  `};
`;
// styled component do componente Heading
