import PropTypes from 'prop-types';
import { Container, SectionStyle, Title } from './Section.styled';

const Section = ({ title, children, refUse }) => (
  <SectionStyle pad={title}>
    <Container>
      {title && <Title ref={refUse}>{title}</Title>}
      {children}
    </Container>
  </SectionStyle>
);

Section.propType = {
  title: PropTypes.string,
  children: PropTypes.object,
  refUse: PropTypes.number,
};

export default Section;
