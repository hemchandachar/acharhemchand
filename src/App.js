import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Certifications from './components/certifications/Certifications';
import Project from './components/projects/Project';
import Qualifications from './components/Qualifications/Qualifications';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollDown from './components/home/ScrollDown';
import ScrollUp from './components/scrollup/ScrollUp';

const App = () => {
  return (
    <>
    <Header />

    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Certifications />
      <Project />
      <Qualifications />
      <Contact />
    </main>

    <Footer />
    <ScrollUp />
    </>
  )
}

export default App;
