import { screen } from '@testing-library/react';
import { MenuLink } from '.';
import { renderTheme } from '../../styles/render.theme';
describe('<MenuLink>', () => {
  it('should a link', () => {
    renderTheme(<MenuLink link={'http://localhost'}>Children</MenuLink>);
    expect(screen.getByRole('link', { nome: 'Children' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute(
      'target',
      '_self',
    );
  });
  it('should a link', () => {
    renderTheme(
      <MenuLink link={'http://localhost'} newTab={true}>
        Children
      </MenuLink>,
    );

    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute(
      'target',
      '_blank',
    );
  });
  it('should match snapshot', () => {
    const { container } = renderTheme(
      <MenuLink link={'http://localhost'}>Children</MenuLink>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
