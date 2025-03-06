import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './EastAsian.css';

function EastAsia() {
  const [modalContent, setModalContent] = useState(null); // State to manage modal content 

  const openModal = (content) => { // Function to open the modal with the specific content 
    setModalContent(content);
  };

  const closeModal = () => { // Function to close the modal
    setModalContent(null);
  };

  const navigate = useNavigate(); // Hook for the navigation to the home page

  return (
    <div className="EastAsia">
      <header className="page-header">
        <button className="home-button" onClick={() => navigate('/')}>
          Home
        </button>
        <h1 className="header">Summary Statistics</h1>
      </header>

      <div className="stats-list">
        {/* China Section */}
        <h2 className="country-heading">China</h2>
        <section className="country-stats">
          <p>
            <strong>Genome-wide association study in a Chinese population identifies a susceptibility locus for type 2 diabetes at 7q32 near PAX4</strong> –
            <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3648687/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">
              Read the study
            </a>
          </p>
          <p>This study identifies genetic variants associated with type 2 diabetes (T2D) in the Han Chinese population.</p>

          <h3>Key Findings</h3>
          {/* Table visible on page load */}
          <table className="stats-table" onClick={() => openModal(
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
          )}>
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
          {/* Table visible on page load */}
          <table className="stats-table" onClick={() => openModal(
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
          )}>
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

        {/* South Korea Section */}
        <h2 className="country-heading">South Korea</h2>
        <section className="country-stats">
          <p>
            <strong>Polymorphisms of KCNJ11 (Kir6.2 gene) are associated with Type 2 diabetes and hypertension in the Korean population</strong> – 
            <a href="https://onlinelibrary.wiley.com/doi/10.1111/j.1464-5491.2006.02050.x" target="_blank" rel="noopener noreferrer">
              Read the study
            </a>
          </p>
          <p>This study reports that polymorphisms in KCNJ11 (including rs5219) are associated with increased risk of Type 2 diabetes (T2D) and hypertension in the Korean population.</p>

          <h3>Key Findings</h3>
          {/* Table visible on page load */}
          <table className="stats-table" onClick={() => openModal(
            <table className="stats-table">
              <thead>
                <tr>
                  <th>SNP</th>
                  <th>Gene</th>
                  <th>Odds Ratio (OR)</th>
                  <th>P-Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>rs5219</td>
                  <td>KCNJ11 (Kir6.2)</td>
                  <td>1.376 (95% CI: 1.085–1.745)</td>
                  <td>p = 0.008</td>
                </tr>
              </tbody>
            </table>
          )}>
            <thead>
              <tr>
                <th>SNP</th>
                <th>Gene</th>
                <th>Odds Ratio (OR)</th>
                <th>P-Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>rs5219</td>
                <td>KCNJ11 (Kir6.2)</td>
                <td>1.376 (95% CI: 1.085–1.745)</td>
                <td>p = 0.008</td>
              </tr>
            </tbody>
          </table>
          <p><strong>Note:</strong> This variant is included in our database and has been shown to increase the risk of T2D among Koreans.</p>

          <p>
            <strong>Type 2 diabetes-associated genetic variants discovered in recent genome-wide association studies are related to gestational diabetes mellitus in the Korean population</strong> – 
            <a href="https://link.springer.com/article/10.1007/s00125-008-1196-4?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">
              Read the study
            </a>
          </p>
          <p>This study found that genetic variants associated with T2D are also related to gestational diabetes mellitus (GDM) in Korean women.</p>

          <h3>Key Findings</h3>
          {/* Table visible on page load */}
          <table className="stats-table" onClick={() => openModal(
            <table className="stats-table">
              <thead>
                <tr>
                  <th>SNP</th>
                  <th>Gene</th>
                  <th>Odds Ratio (OR)</th>
                  <th>P-Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>rs7756992</td>
                  <td>CDKAL1</td>
                  <td>1.55 (95% CI: 1.34–1.79)</td>
                  <td>p = 4.17 × 10⁻⁹</td>
                </tr>
                <tr>
                  <td>rs10811661</td>
                  <td>CDKN2A-CDKN2B</td>
                  <td>1.49 (95% CI: 1.29–1.72)</td>
                  <td>p = 1.05 × 10⁻⁷</td>
                </tr>
              </tbody>
            </table>
          )}>
            <thead>
              <tr>
                <th>SNP</th>
                <th>Gene</th>
                <th>Odds Ratio (OR)</th>
                <th>P-Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>rs7756992</td>
                <td>CDKAL1</td>
                <td>1.55 (95% CI: 1.34–1.79)</td>
                <td>p = 4.17 × 10⁻⁹</td>
              </tr>
              <tr>
                <td>rs10811661</td>
                <td>CDKN2A-CDKN2B</td>
                <td>1.49 (95% CI: 1.29–1.72)</td>
                <td>p = 1.05 × 10⁻⁷</td>
              </tr>
            </tbody>
          </table>
          <p><strong>Note:</strong> Both of these variants are included in our database and have been shown to increase the risk of gestational diabetes and Type 2 diabetes in Koreans.</p>        </section>
      </div>

      {/* Modal Content */}
      {modalContent && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {modalContent}
            <button className="close-btn" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}

      <footer>
        <p>Summary Statistics for East Asia</p>
        <p className="footer-group-name">© 2025 Xenial Xerus. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default EastAsia;
