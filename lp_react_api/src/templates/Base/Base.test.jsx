import { screen } from '@testing-library/react';
import { Base } from '.';
import { renderTheme } from '../../styles/render.theme';

describe('<Base>', () => {
  it('should render with default values', () => {
    renderTheme(<Base>Oi</Base>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
