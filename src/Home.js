import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import RoundedBoxes from './RoundedBoxes';

function Home() {
  const [query, setQuery] = useState('');
  const [chromosome, setChromosome] = useState('');
  const [rs_id, setRsId] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);

    if (searchQuery) {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get('http://127.0.0.1:5000/api/search', {
          params: { 
            query: searchQuery,
            chromosome: chromosome,
            rs_id: rs_id
          }
        });
        setResults(response.data);
      } catch (error) {
        console.error('Error fetching search results:', error);
        setError('Failed to fetch results. Please try again.');
      } finally {
        setLoading(false);
      }
    } else {
      setResults([]);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>SNPs associated with Type 2 diabetes in Asian Populations</h1>
        <h3>Xenial Xerus</h3>
      </header>

      <p>
        This website is an SNP browser website dedicated to highlighting SNPs associated with Type 2 diabetes in populations understudied, specifically Southern and Eastern Asia. This website includes gene ontology, SNP location, p-values for such associations as well as a number of summary statistics.
      </p>

      {/* Search Controls */}
      <div className="search-controls">
        <input
          type="text"
          placeholder="Search by gene symbol..."
          value={query}
          onChange={handleSearch}
          className="search-bar"
        />
        <input
          type="text"
          placeholder="Chromosome"
          value={chromosome}
          onChange={(e) => setChromosome(e.target.value)}
          className="search-bar"
        />
        <input
          type="text"
          placeholder="RS ID"
          value={rs_id}
          onChange={(e) => setRsId(e.target.value)}
          className="search-bar"
        />
      </div>

      {/* Loading and Error States */}
      {loading && <div className="loading">Loading results...</div>}
      {error && <div className="error">{error}</div>}

      {/* Enhanced Search Results */}
      {results.length > 0 && (
        <div className="search-results">
          {results.map((result, index) => (
            <div key={index} className="result-card">
              <h3>{result.gene_symbol} ({result.gene_name})</h3>
              <p>Chromosome: {result.chromosome}</p>
              <p>Position: {result.position}</p>
              
              {result.snps && result.snps.length > 0 && (
                <div className="snps-list">
                  <h4>Associated SNPs:</h4>
                  {result.snps.map((snp, idx) => (
                    <div key={idx} className="snp-card">
                      <h5>{snp.rs_id}</h5>
                      <p>Position: {snp.position}</p>
                      <p>Alleles: {snp.alleles}</p>
                      
                      {snp.summary_stats && snp.summary_stats.length > 0 && (
                        <div className="stats">
                          <h6>Population Statistics:</h6>
                          {snp.summary_stats.map((stat, statIdx) => (
                            <div key={statIdx} className="stat-item">
                              <p>Population: {stat.population}</p>
                              <p>Tajima's D: {stat.tajimas_d}</p>
                              <p>iHS: {stat.ihs}</p>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {snp.phenotypes && snp.phenotypes.length > 0 && (
                        <div className="phenotypes">
                          <h6>Associated Phenotypes:</h6>
                          {snp.phenotypes.map((phenotype, phenIdx) => (
                            <div key={phenIdx} className="phenotype-item">
                              <p>{phenotype.name}</p>
                              <p>{phenotype.description}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      <section className="home-main-image">
        <div className="heatmap">
          <img
            src="https://www.visualcapitalist.com/wp-content/uploads/2023/05/World_diabetes_WB_IDF_2021-2.jpg"
            alt="heat-graph"
          />
        </div>
      </section>

      <RoundedBoxes />

      <h2 className="section-heading">Graph Showing Type 2 Diabetes Prevalence in Different Ethnicities in the UK</h2>

      <section className="research-section">
        <div className="graph-container">
          <div className="graph">
            <img
              src="https://onlinelibrary.wiley.com/cms/asset/06834406-c898-4c6b-9151-e1e7418b1ccb/dme13895-fig-0002-m.jpg"
              alt="SNP Graph"
            />
          </div>

          <div className="description">
            <p>
              The lack of clinical data in populations of South Asian descent such as Indian, Bangladeshi and Pakistani 
              can cause many issues in the diagnosis and treatment of type 2 diabetes. As shown on figure 1, 
              the percentage of doctor diagnosed type 2 diabetes in these populations are much higher than that of the general population. 
              This highlights the requirement needed to further research in these populations; 
              particularly in SNPs associated with this disease.
            </p>
          </div>
        </div>

        <div className="graph-container">
          <div className="graph">
            <img
              src="https://ars.els-cdn.com/content/image/1-s2.0-S0168822711005250-gr1_lrg.jpg"
              alt="graph2"
            />
          </div>

          <div className="description">
            <p>
              The image here on the left indicates that future prevalence of type 2 diabetes in not only South Asian populations 
              but also Asian populations as a wholistic population. This further proves that a stronger and more immediate effort must take place 
              in clinical research to identify all SNPs associated with type 2 diabetes. 
            </p>
          </div>
        </div>
      </section>

      <footer>
        <p>
          1. Mu, Y.M., Misra, A., Adam, J.M., Chan, S.P., Chow, F.C., Cunanan, E.C., Deerochanawong, C., Jang, H.C., Khue, N.T., Sheu, W.H.H. and Tan, K.E., 2012. Managing diabetes in Asia: overcoming obstacles and the role of DPP-IV inhibitors. Diabetes research and clinical practice, 95(2), pp.179-188.
          <br />
          2. Goff, L.M., 2019. Ethnicity and type 2 diabetes in the UK. Diabetic Medicine, 36(8), pp.927-938.
        </p>
      </footer>
    </div>
  );
}

export default Home;
