import Button from 'components/Button/Button';
import { Container, HeroContent, HeroText, HeroTitle } from './Hero.styled';

const Hero = ({ refUse }) => {
  const handleClickUsers = () => {
    refUse.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section>
      <Container>
        <HeroContent>
          <HeroTitle>Test assignment for front-end developer</HeroTitle>
          <HeroText>
            What defines a good front-end developer is one that has skilled
            knowledge of HTML, CSS, JS with a vast understanding of User design
            thinking as they'll be building web interfaces with accessibility in
            mind. They should also be excited to learn, as the world of
            Front-End Development keeps evolving.
          </HeroText>
          <Button onClick={handleClickUsers}>Sign up</Button>
        </HeroContent>
      </Container>
    </section>
  );
};

export default Hero;
