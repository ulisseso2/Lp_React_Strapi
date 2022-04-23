import P from 'prop-types';
import * as Styled from './styles';
import { ArrowCircleUp } from '@styled-icons/material-outlined';

export const UpArrow = () => {
  return (
    <Styled.Container href="#">
      <ArrowCircleUp aria-label="Voltar para o topo" title="Ir para o topo" />
    </Styled.Container>
  );
};
