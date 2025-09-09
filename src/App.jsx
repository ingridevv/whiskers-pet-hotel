import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import About from "./components/About";
import Journey from "./components/Journey";
import Club from "./components/Club";

const App = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Benefits />
    <Testimonials />
    <About />
    <Journey />
    <Club />
    </>
  )
}

export default App;