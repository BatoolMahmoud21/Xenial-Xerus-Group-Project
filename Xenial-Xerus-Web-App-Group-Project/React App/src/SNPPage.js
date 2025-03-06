import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

function SNPPage() {
  const { state } = useLocation();
  const { searchResults } = state || {};

  // Function to check if a value is a number and not "Not Calculated"
  const isNumber = (value) => {
    return !isNaN(value) && value !== "Not Calculated" && value !== '0';
  };
  // displays the information in a table
  return (
    <div className="SNPPage">
      <h1>SNP Search Results</h1>
      {searchResults && searchResults.length > 0 ? (
        <table border="1" cellPadding="5" cellSpacing="0" style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>rs ID</th>
              <th>Gene</th>
              <th>Gene Name</th>
              <th>Chromosome</th>
              <th>Start Position</th>
              <th>End Position</th>
              <th>p Value</th>
              <th>Population</th>
              <th>Tajimas D value</th>
              <th>EHH</th>
            </tr>
          </thead>
          <tbody>
            {searchResults.map((snp, index) => (
              <tr key={index}>
                <td>{snp.rs_id}</td>
                <td>
                  <Link to={`/gene/${snp.Gene}`}>{snp.Gene}</Link>
                </td>
                <td>{snp['Gene Name']}</td>
                <td>{snp.Chromosome}</td>
                <td>{snp['Start Position']}</td>
                <td>{snp['End Position']}</td>
                <td>{snp['p Value']}</td>
                <td>
                    <Link to={`/population/${snp.Population}/${snp.rs_id}`}> {/*makes population linkable - takes user to PopulationPage.js*/} 
                      {snp.Population}
                    </Link>
                </td>
                <td>
                  {snp['Tajimas D value'] === "Not Calculated" || snp['Tajimas D value'] === '0' ? (
                    snp['Tajimas D value'] // Treats '0' or 'Not Calculated' as plain text
                  ) : isNumber(snp['Tajimas D value']) ? (
                    <Link to={`/south-asia/SouthAsian/${snp.rs_id}`}> {/*adds a link to take to the SouthAsia.js page with extended summary stats graphs*/}
                      {snp['Tajimas D value']}
                    </Link>
                  ) : (
                    snp['Tajimas D value']
                  )}
                </td>
                <td>
                  {snp.EHH === "Not Calculated" || snp.EHH === '0' ? (
                    snp.EHH // Treats '0' or 'Not Calculated' as plain text
                  ) : isNumber(snp.EHH) ? (
                    <Link to={`/south-asia/SouthAsian/${snp.rs_id}`}> {/*adds a link to take to the SouthAsia.js page with extended summary stats graphs*/}
                      {snp.EHH}
                    </Link>
                  ) : (
                    snp.EHH
                  )}
                </td>
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
