import React from "react";
import Nav from "./Nav.jsx";
import Feature from "./Feature.jsx";
import Footer from "./Footer.jsx";
import ContactSection from "./Contact.jsx";
import {EcoCorpHero} from "./EcoCorpHero.jsx";
import Hero from "./Hero.jsx";
const Home = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Feature />
      <EcoCorpHero/>
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
