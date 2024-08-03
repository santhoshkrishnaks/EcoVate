import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Ecocalc from './Components/Ecocalc/Ecocalc';
import Results from './Components/Ecocalc/Results';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Ecocalc />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </Router>
  );
}

export default App;
