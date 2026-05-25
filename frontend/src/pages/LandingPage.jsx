import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import CaseStudies from '../components/CaseStudies';
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
    <div className="landing-page scroll-flow-page">
      <AuroraBackground />
      <AmbientInteraction />
      <SparkProvider />
      <Header scrolled={scrolled} />
      <main className="relative z-[1]">
        <Hero />
        <ScrollReveal y={12} delay={0}>
          <About />
        </ScrollReveal>
        <ScrollReveal y={14} delay={50}>
          <Experience />
        </ScrollReveal>
        <ScrollReveal y={14} delay={80}>
          <Projects />
        </ScrollReveal>
        <ScrollReveal y={14} delay={110}>
          <CaseStudies />
        </ScrollReveal>
        <ScrollReveal y={12} delay={140}>
          <Skills />
        </ScrollReveal>
        <ScrollReveal y={12} delay={170}>
          <Certifications />
        </ScrollReveal>
        <ScrollReveal y={14} delay={200}>
          <Contact />
        </ScrollReveal>
      </main>
      <ScrollReveal y={10} delay={0}>
        <Footer />
      </ScrollReveal>
    </div>
  );
};

export default LandingPage;
