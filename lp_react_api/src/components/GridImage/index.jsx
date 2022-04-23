import P from 'prop-types';
import * as Styled from './styles';

import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { Textcomponent } from '../Textcomponent';

export const GridImage = ({
  title,
  description,
  background = false,
  image,
}) => {
  return (
    <SectionBackground background={background}>
      <Styled.Container>
        <Styled.Title>
          <Heading as="h2" size="medium" colorDark={!background}>
            {title}
          </Heading>
          <Textcomponent>{description}</Textcomponent>
        </Styled.Title>
        <Styled.Grid>
          {image.map((img) => (
            <Styled.GridImg key={img.srcImg}>
              <Styled.Img src={img.srcImg} alt={img.alt} />
            </Styled.GridImg>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
};

GridImage.propTypes = {
  title: P.string.isRequired,
  description: P.string.isRequired,
  background: P.bool,
  image: P.arrayOf(
    P.shape({
      srcImg: P.string.isRequired,
      alt: P.string.isRequired,
    }),
  ),
};
