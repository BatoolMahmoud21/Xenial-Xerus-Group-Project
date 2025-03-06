//imports the libraries needed

import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

//imports all the js files 

import SouthAsia from './SouthAsia';  
import EastAsia from './EastAsia';
import Home from './Home';   
import SNPPage from './SNPPage';
import GeneOntologyPage from './GeneOntologyPage';
import PopulationPage from './PopulationPage';

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
          <Route path="/gene/:geneSymbol" element={<GeneOntologyPage/>} />
          <Route path="/population/:PopulationName/:rs_id" element={<PopulationPage />} />
          <Route path="/south-asia/SouthAsian/:rs_id" element={<SouthAsia />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Main;
