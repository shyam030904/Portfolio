import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar/Navbar';
import ScrollProgress from './components/ScrollProgress/ScrollProgress';
import CustomCursor from './components/CustomCursor/CustomCursor';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Resume from './components/Resume/Resume';

function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <Navbar onResumeOpen={() => setResumeOpen(true)} />
      <main>
        <Hero onResumeOpen={() => setResumeOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <AnimatePresence>
        {resumeOpen && <Resume onClose={() => setResumeOpen(false)} />}
      </AnimatePresence>
    </>
  );
}

export default App;
