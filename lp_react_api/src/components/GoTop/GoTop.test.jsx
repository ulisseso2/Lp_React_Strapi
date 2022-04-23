import { screen } from '@testing-library/react';
import { GoTop } from '.';
import { renderTheme } from '../../styles/render.theme';

describe('<GoTop>', () => {
  it('should render with default values', () => {
    renderTheme(<GoTop>Oi</GoTop>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
