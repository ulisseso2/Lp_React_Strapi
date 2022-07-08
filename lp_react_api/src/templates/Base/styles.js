import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    padding-top: 5.4rem;

    @media ${theme.font.media.ltmedium} {
      padding-top:0;

    }

  `}
`;
