import { GridSection } from '../../components/GridSection';
import mockGrid from '../../components/GridSection/mock';
import mockGridImage from '../../components/GridImage/mock';
import { GridImage } from '../../components/GridImage';
import mockNavLink from '../../components/NavLinks/mock';
import { GridTwoColumns } from '../../components/GridTwoColumn';
import mockTwoColumns from '../../components/GridTwoColumn/mock';

export const mockBase = {
  children: (
    <>
      <GridSection {...mockGrid} background />
      <GridTwoColumns {...mockTwoColumns} />
      <GridSection {...mockGrid} background />
      <GridSection {...mockGrid} />
      <GridImage {...mockGridImage} />
    </>
  ),
  links: mockNavLink,
  logoData: {
    text: 'Algo',
    srcImg: 'assets/images/logo_cor_horiz.png',
    link: 'http://localhost.com',
  },
  footerHtml:
    '<p> <a href="https://linkedin.com/in/ulissesoliveira2" target="_blank">Feito com <span>❤</span> por Ulisses Oliveira </a></p>',
};
