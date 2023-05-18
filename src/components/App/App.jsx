import Header from 'components/Header/Header';
import Hero from 'components/Hero/Hero';
import WorkingGET from 'components/Working/Working';
import Section from 'components/Section/Section';
import WorkingPOST from 'components/WorkingPOST/WorkingPOST';
import Footer from 'components/Footer/Footer';

export const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Section title="Working with GET request">
        <WorkingGET />
      </Section>
      <Section title="Working with POST request">
        <WorkingPOST />
      </Section>
      <Footer />
    </>
  );
};
