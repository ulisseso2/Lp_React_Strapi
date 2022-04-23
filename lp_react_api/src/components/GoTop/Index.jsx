import P from 'prop-types';
import * as Styled from './styles';
import { ArrowCircleUp as ArrowTop } from '@styled-icons/material/ArrowCircleUp';

export const GoTop = () => {
  return (
    <Styled.Container>
      <Styled.Button aria-label="ArrowTop"></Styled.Button>
    </Styled.Container>
  );
};

GoTop.propTypes = {
  children: P.node.isRequired,
};
