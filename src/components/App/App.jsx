import Header from 'components/Header/Header';
import Hero from 'components/Hero/Hero';
import WorkingGET from 'components/Working/Working';
import Section from 'components/Section/Section';
import WorkingPOST from 'components/WorkingPOST/WorkingPOST';
import Footer from 'components/Footer/Footer';
import { useRef } from 'react';

export const App = () => {
  const usersRef = useRef(null);
  const singUpRef = useRef(null);

  return (
    <>
      <Header usersRef={usersRef} singUpRef={singUpRef} />
      <Hero refUse={singUpRef} />
      <Section refUse={usersRef} title="Working with GET request">
        <WorkingGET />
      </Section>
      <Section refUse={singUpRef} title="Working with POST request">
        <WorkingPOST refUse={usersRef} />
      </Section>
      <Footer />
    </>
  );
};
