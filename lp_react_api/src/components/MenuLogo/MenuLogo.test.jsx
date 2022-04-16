import { screen } from '@testing-library/react';
import { MenuLogo } from '.';
import { renderTheme } from '../../styles/render.theme';

describe('<MenuLogo>', () => {
  it('should render text logo', () => {
    renderTheme(<MenuLogo link="#target" text="olá mundo" />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
