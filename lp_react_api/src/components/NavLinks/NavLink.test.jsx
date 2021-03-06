import { screen } from '@testing-library/react';
import { NavLinks } from '.';
import { renderTheme } from '../../styles/render.theme';
import { theme } from '../../styles/theme';
import mock from './mock';

describe('<NavLinks>', () => {
  it('should render links mock', () => {
    renderTheme(<NavLinks links={mock} />);
    expect(screen.getAllByRole('link')).toHaveLength(mock.length);
  });
  it('should not render links', () => {
    renderTheme(<NavLinks />);
    expect(screen.queryAllByText(/link/i)).toHaveLength(0);
  });
  // it('should render media menu', () => {
  //   renderTheme(<NavLink links={mock} />);
  //   expect(screen.getByText(/link 2/i).parentElement).toHaveStyleRule(
  //     'flex-flow',
  //     'colum wrap',
  //     { media: theme.font.media.ltmedium },
  //   );
  // });
  it('should match snapshot', () => {
    const { container } = renderTheme(<NavLinks links={mock} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
