import { Home } from '.';
import { renderTheme } from '../../styles/render.theme';

describe('<Home>', () => {
  it('should render with default values', () => {
    const { container } = renderTheme(<Home />);
    expect(container).toBeInTheDocument();
  });
});
