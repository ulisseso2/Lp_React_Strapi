import { createEvent, screen, fireEvent, render } from '@testing-library/react';
import { Home } from '.';
import { renderTheme } from '../../styles/render.theme';

describe('<Home>', () => {
  it('should render with default values', () => {
    const { container } = renderTheme(<Home />);
    expect(container).toBeInTheDocument();
  });
});
