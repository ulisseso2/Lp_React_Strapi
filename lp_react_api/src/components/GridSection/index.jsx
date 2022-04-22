import P from 'prop-types';
import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { Textcomponent } from '../Textcomponent';
import { SectionContainer } from '../SectionContainer';

export const GridSection = ({
  background = false,
  title,
  description,
  grid,
}) => {
  return (
    <SectionBackground background={background}>
      <Styled.Container background={background}>
        <Heading as="h2" colorDark={!background} uppercase>
          {title}
        </Heading>
        <Textcomponent>{description}</Textcomponent>
        <Styled.Grid background={background}>
          {grid.map((el) => (
            <Styled.GridElement key={el.title}>
              <Heading as="h3" colorDark={!background} size="medium">
                {el.title}
              </Heading>
              <Textcomponent>{el.description}</Textcomponent>
            </Styled.GridElement>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
};

GridSection.propTypes = {
  background: P.bool,
  title: P.string.isRequired,
  description: P.string.isRequired,
  grid: P.arrayOf(
    P.shape({
      title: P.string.isRequired,
      description: P.string.isRequired,
    }),
  ).isRequired,
};
