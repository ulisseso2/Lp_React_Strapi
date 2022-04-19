import { screen } from '@testing-library/react';
import { MenuLogo } from '.';
import { renderTheme } from '../../styles/render.theme';

describe('<MenuLogo>', () => {
  it('should render text logo', () => {
    renderTheme(<MenuLogo link="#target" text="Olá mundo" />);
    const heading = screen.getByRole('heading', { nome: 'Olá mundo' });
    expect(heading.firstChild).toHaveAttribute('href', '#target');
  });
  it('should render image logo', () => {
    renderTheme(
      <MenuLogo link="#target" text="Olá mundo" srcImg="image.jpg" />,
    );
    const heading = screen.getByRole('heading', { nome: 'Olá mundo' });
    expect(screen.getByRole('img', { name: 'Olá mundo' })).toHaveAttribute(
      'src',
      'image.jpg',
    );
  });
  it('shold match snapshot', () => {
    const { container } = renderTheme(
      <MenuLogo link="#tardet" text="Olá Mundo" srcImg="image.jpg" />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
