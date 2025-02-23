//imports the libraries needed

import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

//imports all the js files 

import SouthAsia from './SouthAsia';  
import EastAsia from './EastAsia';
import Home from './Home';  
import SummaryStatistics from './SummaryStatistics'; 
import SNPPage from './SNPPage';
import GeneOntologyPage from './GeneOntologyPage';

function Main() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/*These routes define the paths needed to be taken when clicking on certain bottons on the webpage */}
          <Route path="/" element={<Home />} />
          <Route path="/snp-page" element={<SNPPage/>} />
          <Route path="/south-asia" element={<SouthAsia />} />
          <Route path="/east-asia" element={<EastAsia />} />
          <Route path="/summary" element={<SummaryStatistics />} />
          <Route path="/gene/:geneSymbol" element={<GeneOntologyPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default Main;
