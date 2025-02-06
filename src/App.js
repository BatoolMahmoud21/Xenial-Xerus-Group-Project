import React from 'react';
import './App.css';

const RoundedBoxes = () => {
  return (
    <div className="container">
      <div className="box">South Asia</div>
      <div className="box">East Asia</div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <header>
        <h1>SNPs associated with Type 2 diabetes in Asian Populations</h1>
        <h3>Xenial Xerus</h3>
      </header>

      <p>
        This website is an SNP browser website dedicated to highlighting SNPs associated with Type 2 diabetes in populations understudied, specifically Southern and Eastern Asia.
        This website includes gene ontology, SNP location, p-values for such associations as well as a number of summary statistics.
      </p>

      <input
        type="text"
        placeholder="Search..."
        className="search-bar"
      />

      <RoundedBoxes />

      
      <h2 className="section-heading">Graph Showing Type 2 Diabetes Prevalence in Different Ethnicities in the UK</h2>

      <section className="research-section">
        <div className='graph'>
          <img
            src='https://onlinelibrary.wiley.com/cms/asset/06834406-c898-4c6b-9151-e1e7418b1ccb/dme13895-fig-0002-m.jpg'
            alt='SNP Graph'
          />
        </div>

        <div className="description">
          <p>
              PLACEHOLDER
          </p>
        </div>
      </section>

      <footer>
        <p>© 2025 Xenial Xerus. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

