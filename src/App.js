import React, { useState, useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <h1>Xenial Xerus</h1>
      <p>
        This website is an SNP browser website dedicated to highlighting SNPs associated with Type 2 diabetes in populations understudied, specifically Southern and Eastern Asia.
        This website includes gene ontology, SNP location, p-values for such associations as well as a number of summary statistics.
      </p>
      
      {/* Search Bar */}
      <input
        type = "text"
        placeholder='Search...'
        style={{
          padding: '10px',
          marginTop: '20px',
          fontSize: '16px',
          width: '75%',
          maxWidth: '300px',
        }}/>
    </div>
  );
}

export default App;

