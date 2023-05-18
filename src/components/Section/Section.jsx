import { Container, SectionStyle, Title } from './Section.styled';

const Section = ({ title, children }) => (
  <SectionStyle pad={title}>
    <Container>
      {title && <Title>{title}</Title>}
      {children}
    </Container>
  </SectionStyle>
);
export default Section;
