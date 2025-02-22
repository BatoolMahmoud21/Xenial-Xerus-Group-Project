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
              <th>rs ID</th>
              <th>Gene</th>
              <th>Gene Name</th>
              <th>Chromosome</th>
              <th>Start Position</th>
              <th>End Position</th>
              <th>p Value</th>
            </tr>
          </thead>
          <tbody>
            {searchResults.map((snp, index) => (
              <tr key={index}>
                <td>{snp.rs_id}</td>  
                <td>{snp.Gene}</td>
                <td>{snp['Gene Name']}</td>
                <td>{snp.Chromosome}</td>  
                <td>{snp['Start Position']}</td>  
                <td>{snp['End Position']}</td>
                <td>{snp['p Value']}</td>  
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
