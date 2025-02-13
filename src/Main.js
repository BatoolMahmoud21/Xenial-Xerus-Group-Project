import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';


import SouthAsia from './SouthAsia';  
import EastAsia from './EastAsia';
import Home from './Home';  
import SummaryStatistics from './SummaryStatistics'; 

function Main() {
  return (
    <Router>
      <div className="App">
        <Routes>
          
          <Route path="/" element={<Home />} />
          
          
          <Route path="/south-asia" element={<SouthAsia />} />
          <Route path="/east-asia" element={<EastAsia />} />
          <Route path="/summary" element={<SummaryStatistics />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Main;
