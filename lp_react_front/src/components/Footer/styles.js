import styled, { css } from 'styled-components';
import { Container as TextComponent } from '../Textcomponent/styles';
import { Container as SectionContainer } from '../SectionContainer/styles';

export const Container = styled.footer`
  ${({ theme }) => css`
    text-align: center;
    border-top: 1px solid ${theme.colors.mediumGray};

    a {
      color: inherit;
      text-decoration: none;
    }
    span {
      color: red;
    }

    & ${TextComponent} {
      font-size: ${theme.font.sizes.small};
    }

    & ${SectionContainer} {
      padding-top: 0;
      padding-bottom: 0;
    }
  `}
`;
