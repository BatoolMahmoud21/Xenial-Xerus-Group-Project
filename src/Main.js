import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import SouthAsia from './SouthAsia';  
import EastAsia from './EastAsia';
import Home from './Home';  

function Main() {
  return (
    <Router>
      <div className="App">
        <Routes>
          
          <Route path="/" element={<Home />} />
          
          
          <Route path="/south-asia" element={<SouthAsia />} />
          <Route path="/east-asia" element={<EastAsia />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Main;