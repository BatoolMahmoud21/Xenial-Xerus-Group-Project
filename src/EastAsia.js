import React from 'react';
import './EastAsian.css';

function EastAsia() {
  return (
    <div className="EastAsia">
      <header className="page-header">
        <button className="home-button" onClick={() => alert('Home clicked')}>
          Home
        </button>
        <h1 className="header">East Asian Populations</h1>
      </header>

      <div className="country-list">
        <h2>China (Han Chinese Population)</h2>
        <p>Genetic studies have identified several key single nucleotide polymorphisms (SNPs) associated with an increased risk of T2D in the **Han Chinese** population. Notably, the following SNPs have been shown to influence the risk of developing Type 2 diabetes:</p>

        <h2>Japan</h2>
        <p>
          Several SNPs have been identified in the Japanese population that are associated with Type 2 diabetes risk:
        </p>

        <h2>South Korea</h2>
        <p>
          Several SNPs have been identified in the South Korean population that are associated with Type 2 diabetes risk:
        </p>

      </div>
    </div>
  );
}

export default EastAsia;
