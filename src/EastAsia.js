import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './EastAsian.css';

function EastAsia() {
  const navigate = useNavigate(); // Define navigate function

  return (
    <div className="EastAsia">
      <header className="page-header">
      <button className="home-button" onClick={() => navigate('/')}>
      Home</button>
        <h1 className="header">Summary Statistics</h1>
      </header>

      <div className="stats-list">
      <h2 className="country-heading">China</h2>
        {/* China Section */}
        <section className="country-stats">
          <p>
            <strong>Genome-wide association study in a Chinese population identifies a susceptibility locus for type 2 diabetes at 7q32 near PAX4</strong> – 
            <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3648687/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">
              Read the study
            </a>
          </p>
          <p>This study identifies genetic variants associated with type 2 diabetes (T2D) in the Han Chinese population.</p>

          <h3>Key Findings</h3>
          <table className="stats-table">
            <thead>
              <tr>
                <th>SNP</th>
                <th>Chromosome</th>
                <th>Gene</th>
                <th>Odds Ratio (OR)</th>
                <th>P-Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>rs10229583</td>
                <td>7q32</td>
                <td>PAX4</td>
                <td>1.18 (1.11, 1.25)</td>
                <td>2.6 × 10⁻⁸</td>
              </tr>
            </tbody>
          </table>
          <p><strong>Note:</strong> The study does not include positive selection metrics.</p>
        </section>

        {/* Japan Section */}
        <h2 className="country-heading">Japan</h2>
        <section className="country-stats">
          <p>
            <strong>Genome-Wide Association Studies in the Japanese Population Identify Seven Novel Loci for Type 2 Diabetes</strong> – 
            <a href="https://www.nature.com/articles/ncomms10531" target="_blank" rel="noopener noreferrer">
              Read the study
            </a>
          </p>
          <p>The study conducted a GWAS and identified seven loci significantly associated with T2D.</p>

          <h3>Key Findings</h3>
          <table className="stats-table">
            <thead>
              <tr>
                <th>Loci Identified</th>
                <th>Risk Allele Frequency (RAF)</th>
                <th>Odds Ratio (OR)</th>
                <th>P-Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>7</td>
                <td>0.099 - 0.947</td>
                <td>1.09 - 1.19</td>
                <td>P &lt; 5 × 10⁻⁸</td>
              </tr>
            </tbody>
          </table>
          <p><strong>Note:</strong> The study does not provide selection statistics like Fst, Tajima’s D, or iHS.</p>
        </section>
      </div>

      <footer>
        <p>Summary Statistics for East Asia</p>
        <p className="footer-group-name">© 2025 Xenial Xerus. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default EastAsia;
