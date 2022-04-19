import { screen } from '@testing-library/react';
import { SectionBackground } from '.';
import { renderTheme } from '../../styles/render.theme';

describe('<SectionBackground>', () => {
  it('should render Background', () => {
    const { container } = renderTheme(
      <SectionBackground background={true}>
        <h1>children</h1>
      </SectionBackground>,
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
