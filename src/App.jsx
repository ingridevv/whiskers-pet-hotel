import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Journey from "./components/Journey";
import Club from "./components/Club";
import Footer from "./components/Footer";
import Cta from "./components/Cta";
import Faq from "./components/Faq";
import Pricing from "./components/Pricing";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <section id="beneficios" name="beneficios">
        <Benefits />
      </section>
      <section id="depoimentos" name="depoimentos">
        <Testimonials />
      </section>
      <section id="sobre" name="sobre">
        <About />
      </section>
      <Journey />

      <section id="whiskers-club" name="planos">
        <Club />
      </section>
      <Pricing />
      <section id="faq" name="faq">
        <Faq />
      </section>
      <Cta />
      <Footer />
    </>
  );
};

export default App;
