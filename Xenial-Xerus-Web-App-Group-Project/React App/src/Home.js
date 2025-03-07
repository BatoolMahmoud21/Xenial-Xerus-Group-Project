//imports the libaries react and react-router-dom
//imports APP.css - which contains the aesthetics for the home page
//imports RoundedBoxes, another js file that contains the code for the two interactable bottons on the home page

import React, { useState } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';
import RoundedBoxes from './RoundedBoxes';

function Home() {
  // Single state for the combined search query
  const [searchQuery, setSearchQuery] = useState('');
 
  const navigate = useNavigate();

  // Update search query state
  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Handle form submission to call the API and pass the results
  const handleSearchSubmit = (event) => {
    event.preventDefault();

    // Send the combined search query to the Flask API
    const queryParams = new URLSearchParams({
      query: searchQuery,  // Single search query
    }).toString();

    // Fetch the data from the Flask API
    fetch(`/api/search?${queryParams}`)
      .then((response) => response.json())
      .then((data) => {
        // Navigate to SNPPage and pass search results as state
        navigate('/snp-page', { state: { searchResults: data } });
      })
      .catch((error) => console.error('Error fetching data:', error));
  };

  return (
    <div className="App">
      <header>
        <h1>SNPs associated with Type 2 diabetes in Asian Populations</h1>
        <h3>Xenial Xerus</h3>
      </header>
      <p>
        This website is an SNP browser website dedicated to highlighting SNPs associated with Type 2 diabetes in populations understudied,
        specifically Southern and Eastern Asia.
      </p>

      {/* Unified search bar */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '20vh', flexDirection: 'column' }}>
        <form onSubmit={handleSearchSubmit} style={{ display: 'flex', justifyContent: 'center' }}>
          <input
            type="text"
            placeholder="Search by either rs ID, Gene Symbol (mapped gene), Chromosome, Start Position or End Position"
            value={searchQuery}
            onChange={handleSearchQueryChange}
            style={{
              padding: '12px 20px',
              fontSize: '16px',
              width: '700px',
              borderRadius: '4px',
              border: '1px solid #ccc',
            }}
          />
          <button type="submit">Search</button>
        </form>
      </div>

    {/* Inserts the roundboxes.js file here */}
      <RoundedBoxes />

            {/* Added a new section with graphs and description of graphs */}
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
