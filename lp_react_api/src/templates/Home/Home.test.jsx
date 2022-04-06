import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers';
import { render, screen } from '@testing-library/react';
import { Home } from '.';
import { renderTheme } from '../../styles/render.theme';
import { theme } from '../../styles/theme';

describe('<HOME>', () => {
  it('render Home', () => {
    renderTheme(<Home />);
  });
});
