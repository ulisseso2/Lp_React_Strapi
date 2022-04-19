import { screen } from '@testing-library/react';
import { Menu } from '.';
import { renderTheme } from '../../styles/render.theme';
import { theme } from '../../styles/theme';

import linksMock from '../NavLinks/mock';
const logoData = {
  text: 'Logo',
  link: '#target',
};

describe('<Menu>', () => {
  it('should render Logo and Main Menu nav', () => {
    const { container } = renderTheme(
      <Menu links={linksMock} logoData={logoData} />,
    );
    expect(screen.getByRole('heading', { name: 'Logo' })).toBeInTheDocument();
    expect(
      screen.getByRole('navigation', { name: 'Main menu' }),
    ).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should render menu mobile and button', () => {
    const { container } = renderTheme(
      <Menu links={linksMock} logoData={logoData} />,
    );
    const button = screen.getByLabelText('Open/Close menu');
    const menuContainer = button.nextSibling;
  });
});
