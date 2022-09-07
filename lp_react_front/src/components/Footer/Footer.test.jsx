import { screen } from '@testing-library/react';
import { Footer } from '.';
import { renderTheme } from '../../styles/render.theme';

describe('<Footer>', () => {
  it('should render with default values', () => {
    const { container } = renderTheme(<Footer html={'<h1>Olá</h1>'} />);
    expect(screen.getByRole('heading', { name: 'Olá' })).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
