import { screen } from '@testing-library/react';
import { UpArrow } from '.';
import { renderTheme } from '../../styles/render.theme';

describe('<UpArrow>', () => {
  it('should render with default values', () => {
    const { container } = renderTheme(<UpArrow />);
    expect(
      screen.getByRole('link', { name: 'Voltar para o topo' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'Voltar para o topo' }),
    ).toHaveAttribute('href', '#');
    expect(container).toMatchSnapshot();
  });
});
