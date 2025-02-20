import React, { useState, useEffect } from 'react';

const SNPPage = () => {
  const [snps, setSnps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch SNP data from your Flask API when the component mounts
  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/search?query=rs7903146')  // Replace with your actual endpoint
      .then(response => response.json())  // Parse the response as JSON
      .then(data => {
        setSnps(data);  // Store the SNP data in state
        setLoading(false);  // Update loading state
      })
      .catch(err => {
        setError('Error fetching SNP data: ' + err.message);  // Handle errors
        setLoading(false);
      });
  }, []); // Empty dependency array means this runs only once after the first render

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>SNP Data</h1>
      {snps.length === 0 ? (
        <p>No SNP data found.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>RS ID</th>
              <th>Gene</th>
              <th>Start Position</th>
              <th>End Position</th>
            </tr>
          </thead>
          <tbody>
            {snps.map((snp) => (
              <tr key={snp.rs_id}>
                <td>{snp.rs_id}</td>
                <td>{snp.Gene}</td>
                <td>{snp['Start Position']}</td>
                <td>{snp['End Position']}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SNPPage;
