import React from 'react';
import { useLocation } from 'react-router-dom';  // Import useLocation

function SNPPage() {
  // Access the search results from location state
  const { state } = useLocation();
  const { searchResults } = state || {};  // Extract searchResults from state

  return (
    <div className="SNPPage">
      <h1>SNP Search Results</h1>
      
      {/* Display search results in SNPPage */}
      {searchResults && searchResults.length > 0 ? (
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
      ) : (
        <p>No search results found</p>
      )}
    </div>
  );
}

export default SNPPage;
