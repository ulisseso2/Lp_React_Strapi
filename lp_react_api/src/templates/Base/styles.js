import styled, { css } from 'styled-components';

import { Container as TextComponent } from '../../components/Textcomponent/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
  `}
`;
