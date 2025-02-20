import React, { useState } from 'react';
import './App.css';
import RoundedBoxes from './RoundedBoxes';

function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]); 

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    fetch(`/api/search?query=${searchQuery}`) 
      .then((response) => response.json())
      .then((data) => setSearchResults(data))
      .catch((error) => console.error('Error fetching data:', error));
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
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search SNP..."
          className="search-bar"
          value={searchQuery}
          onChange={handleSearch}
        />
        <button type="submit">Search</button>
      </form>

      {/* Display search results */}
      {searchResults.length > 0 && (
        <table border="1" cellpadding="5" cellspacing="0" style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>SNP Name</th>
              <th>Gene</th>
              <th>Location</th>
              <th>P-Value</th>
            </tr>
          </thead>
          <tbody>
            {searchResults.map((snp) => (
              <tr key={snp.id}>

                <td>{snp.snp_name}</td>
                <td>{snp.gene}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
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
