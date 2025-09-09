import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import About from "./components/About";
import Journey from "./components/Journey";
import Club from "./components/Club";
import Newsletter from "./components/Newsletter";

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
    <Newsletter />
    </>
  )
}

export default App;