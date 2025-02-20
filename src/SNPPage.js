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
              <th>RS ID</th>
              <th>Gene</th>
              <th>Start Position</th>
              <th>End Position</th>
            </tr>
          </thead>
          <tbody>
            {searchResults.map((snp, index) => (
              <tr key={index}>
                <td>{snp.rs_id}</td>  {/* Display SNP RS ID */}
                <td>{snp.Gene}</td>  {/* Display Gene Name */}
                <td>{snp['Start Position']}</td>  {/* Display Start Position */}
                <td>{snp['End Position']}</td>  {/* Display End Position */}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No SNPs found for the given query.</p>
      )}
    </div>
  );
}

export default SNPPage;
