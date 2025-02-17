import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import RoundedBoxes from './RoundedBoxes'; // Import RoundedBoxes component

function Home() {
  // State to store the search query and results
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  // Function to handle search input change
  const handleSearch = async (e) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);

    if (searchQuery) {
      try {
        const response = await axios.get('http://localhost:5000/api/search', {
          params: { query: searchQuery, chromosome: chromosome, rs_id: rd_id },  // Send the search query as a parameter
        });
        setResults(response.data);  // Set the search results
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    } else {
      setResults([]);  // Clear results if the query is empty
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

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleSearch}
        className="search-bar"
      />

      {/* Search Results */}
      {results.length > 0 && (
        <div className="search-results">
          <ul>
            {results.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
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
              PLACEHOLDER FOR FIRST IMAGE DESCRIPTION
              PLACEHOLDER FOR FIRST IMAGE DESCRIPTION
              PLACEHOLDER FOR FIRST IMAGE DESCRIPTION
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
              PLACEHOLDER FOR SECOND IMAGE DESCRIPTION
              PLACEHOLDER FOR SECOND IMAGE DESCRIPTION
              PLACEHOLDER FOR SECOND IMAGE DESCRIPTION
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
