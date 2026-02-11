import React, { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Info from './components/Info'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Education />
        <Skills />
        <Projects />
        <Info />
      </main>
      <Footer />
    </div>
  )
}
