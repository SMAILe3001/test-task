import { Container, SectionStyle, Title } from './Section.styled';

const Section = ({ title, children, refUse }) => (
  <SectionStyle pad={title}>
    <Container>
      {title && <Title ref={refUse}>{title}</Title>}
      {children}
    </Container>
  </SectionStyle>
);
export default Section;
