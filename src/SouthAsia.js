import React from 'react';
import { Link } from "react-router-dom";
import './SouthAsia.css'; 

function SouthAsia() {  
  return (
    <div className="SouthAsia">
      <header className="page-header">
        <button className="home-button" onClick={() => alert('Home clicked')}>
          Home
        </button>
        <h1 className="header">South Asian Populations</h1>
      </header>

      <div className="country-list">
        <h2>India</h2>
        <p>
        Genetic studies have uncovered several significant single nucleotide polymorphisms (SNPs) that are associated with an increased risk of Type 2 diabetes in the Indian population. Key SNPs include:
        </p>

        <h2>Bangladesh</h2>
        <p>
        Several key genetic variants, or single nucleotide polymorphisms (SNPs), have been identified in the Bangladeshi population that contribute to
        </p>

        <h2>Pakistan</h2>
        <p>Research has identified several SNPs that play a significant role in the genetic risk for Type 2 diabetes in the Pakistani population. These include:  
        </p>
      </div>

      <div className="summary-link-container">
        <Link to="/summary" className="summary-link">View Summary Statistics</Link>
      </div>
    </div>
  );
}

export default SouthAsia; 
