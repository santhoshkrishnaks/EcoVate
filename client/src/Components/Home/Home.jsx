import React, { useContext, useEffect } from "react";
import Nav from "../Header_Footer/Nav.jsx";
import Feature from "./Feature.jsx";
import Footer from "../Header_Footer/Footer.jsx";
import ContactSection from "./Contact.jsx";
import { EcoCorpHero } from "./EcoCorpHero.jsx";
import Hero from "./Hero.jsx";
import Loader from "../Loader/Loader.jsx";
import Create from "../Context.jsx";

const Home = () => {
  const {load,setLoad}=useContext(Create);
  useEffect(() => {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
    }, 500);
  }, [])
  return (
    <div>
    {load?(<Loader/>):
    (<div>
      <Nav />
      <Hero />
      <Feature />
      <EcoCorpHero />
      <ContactSection />
      <Footer />
    </div>)}
    </div>
  );
};

export default Home;
