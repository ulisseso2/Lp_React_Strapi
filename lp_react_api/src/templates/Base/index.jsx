import P from 'prop-types';
import * as Styled from './styles';

import { Menu } from '../../components/Menu';
import { Footer } from '../../components/Footer';
import { UpArrow } from '../../components/UpArrow';

export const Base = ({ links = [], logoData, footerHtml, children }) => {
  return (
    <>
      <Menu links={links} logoData={logoData} />
      <Styled.Container>
        {children}
        <Footer html={footerHtml} />
      </Styled.Container>
      <UpArrow />
    </>
  );
};

Base.propTypes = {
  children: P.node.isRequired,
  ...Menu.propTypes,
  footerHtml: P.string.isRequired,
};
