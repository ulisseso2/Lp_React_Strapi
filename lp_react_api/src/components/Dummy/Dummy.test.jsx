import { Dummy } from '.';
import { renderTheme } from '../../styles/render.theme';

describe('<Dummy>', () => {
  it('should render with default values', () => {
    renderTheme(<Dummy>Oi</Dummy>);
  });
});
