import P from 'prop-types';
import styled from 'styled-components';
import * as Styled from './styles';

export const Heading = ({ children, light = false }) => {
  return <Styled.Title light={light}>{children}</Styled.Title>;
};

Heading.propTypes = {
  children: P.node.isRequired,
  light: P.bool.isRequired,
};
//criação e tipagem do meu componente
