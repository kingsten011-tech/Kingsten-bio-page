import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollReveal from '../components/motion/ScrollReveal';
import AmbientInteraction from '../components/motion/AmbientInteraction';
import AuroraBackground from '../components/motion/AuroraBackground';
import SparkProvider from '../components/motion/SparkProvider';

const LandingPage = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="landing-page">
      <AuroraBackground />
      <AmbientInteraction />
      <SparkProvider />
      <Header scrolled={scrolled} />
      <main className="relative z-[1]">
        <Hero />
        <ScrollReveal>
          <About />
        </ScrollReveal>
        <ScrollReveal delay={40}>
          <Experience />
        </ScrollReveal>
        <ScrollReveal delay={40}>
          <Projects />
        </ScrollReveal>
        <ScrollReveal delay={40}>
          <Skills />
        </ScrollReveal>
        <ScrollReveal delay={40}>
          <Certifications />
        </ScrollReveal>
        <ScrollReveal delay={40}>
          <Contact />
        </ScrollReveal>
      </main>
      <ScrollReveal>
        <Footer />
      </ScrollReveal>
    </div>
  );
};

export default LandingPage;
