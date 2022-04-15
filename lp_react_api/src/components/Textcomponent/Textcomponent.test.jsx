import { getByRole, getByText, screen } from '@testing-library/react';
import { Textcomponent } from '.';
import { renderTheme } from '../../styles/render.theme';
import { theme } from '../../styles/theme';

describe('<Textcomponent>', () => {
  it('should render a text', () => {
    renderTheme(<Textcomponent>texto</Textcomponent>);
    const textcomponent = screen.getByText('texto');

    expect(screen.getByText('texto')).toBeInTheDocument();
  });
  it('should render Style', () => {
    renderTheme(<Textcomponent>texto</Textcomponent>);
    const textcomponent = screen.getByText('texto');

    expect(textcomponent).toHaveStyle({ 'font-size': theme.font.sizes.medium });
  });
});
