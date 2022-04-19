import P from 'prop-types';
import * as Styled from './styles';
import { Heading } from '../Heading';
import { Textcomponent } from '../Textcomponent';
import { SectionBackground } from '../SectionBackground';

export const GridTwoColumn = ({ title, text, srcImg, background = false }) => {
  return (
    <SectionBackground background={background}>
      <Styled.Container>
        <Styled.TextContainer>
          <Heading uppercase>{title}</Heading>
          <Textcomponent>{text}</Textcomponent>
        </Styled.TextContainer>
        <Styled.ImgContainer>
          <Styled.Image src={srcImg} alt={title} />
        </Styled.ImgContainer>
      </Styled.Container>
    </SectionBackground>
  );
};

GridTwoColumn.propTypes = {
  title: P.string.isRequired,
  text: P.string.isRequired,
  srcImg: P.string.isRequired,
  background: P.bool,
};
