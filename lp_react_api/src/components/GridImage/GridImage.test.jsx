import { screen } from '@testing-library/react';
import { GridImage } from '.';
import { renderTheme } from '../../styles/render.theme';

import mock from './mock';
import { GridImg } from './styles';

describe('<GridImage>', () => {
  it('should render with default values', () => {
    const { container } = renderTheme(<GridImage {...mock} />);
    expect(container).toMatchSnapshot();
  });
  it('should render with default values', () => {
    const { container } = renderTheme(
      <GridImg {...mock} background={undefined} />,
    );
    expect(container).toMatchSnapshot();
  });
});
