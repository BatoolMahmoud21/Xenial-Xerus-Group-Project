import React from "react";
import './SummaryStatistics.css';

function SummaryStatistics() {
    return (
      <div className="SummaryStatistics">
        <header className="page-header">
          <button className="home-button" onClick={() => window.location.href = '/'}>
            Home
          </button>
          <h1 className="header">Summary Statistics</h1>
        </header>
  
        <div className="stats-list">
          <h2>Tajima's D Statistics</h2>
          <p>
            Tajima's D is a population genetics statistic used to test for selection and demographic events.
          </p>
          </div>

        <footer>
        <p>Summary Statistics for Population Genetics</p>
      </footer>
    </div>
  );
}

export default SummaryStatistics;
