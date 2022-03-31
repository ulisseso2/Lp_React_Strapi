import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers';
import { render, screen } from '@testing-library/react';
import { Home } from '.';
import { renderTheme } from '../../styles/render.theme';
import { theme } from '../../styles/theme';

test('render <Home/>', () => {
  const { degug } = renderTheme(<Home />);
  const headingContainer = screen.getByRole('heading', {
    name: 'Hello, World!',
  }).parentElement;
  expect(<Home />).toBeInTheDocument;
  expect(headingContainer).toHaveStyle({ background: theme.colors.primary });
  expect(headingContainer).toMatchSnapshot();
});
