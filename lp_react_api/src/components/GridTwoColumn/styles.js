import styled, { css } from 'styled-components';

import { Title } from '../Heading/styles';

export const Container = styled.div`
  ${({ theme, background }) => css`
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    gap: ${theme.spacings.large};
    @media ${theme.font.media.ltmedium} {
      grid-template-columns: 1fr;
      text-align: center;
    }
    ${Title} {
      margin-bottom: ${theme.spacings.xlarge};
      color: ${background ? theme.colors.white : theme.colors.primaryColor};
    }
  `}
`;
export const TextContainer = styled.div`
  ${({ theme }) => css``}
`;
export const ImgContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    max-width: 500px;
  `}
`;
export const Image = styled.img`
  ${({ theme }) => css`
    max-width: 500px;
  `}
`;
