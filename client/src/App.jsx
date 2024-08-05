import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Ecocalc from './Components/Ecocalc/Ecocalc';
import Results from './Components/Ecocalc/Results';
import Feed from './Components/EcoConnect/Feed'
import About from './Components/About'
import { Page1 } from './Components/EcoCsrp/Page1';
import Donate from './Components/Donate';
import { EcoCorpHero } from './Components/EcoCorpHero';
import Nav from './Components/Nav';
const App = () => {
  return (
    <div>
      <Nav/>
    </div>
  )
}

export default App;
