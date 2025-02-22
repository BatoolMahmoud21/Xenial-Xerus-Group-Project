// GeneOntologyPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // To access dynamic params from the URL

function GeneOntologyPage() {
  const { geneSymbol } = useParams(); // Extract geneSymbol from URL
  const [geneInfo, setGeneInfo] = useState(null);

  useEffect(() => {
    // Fetch gene ontology information from Flask API
    const fetchGeneInfo = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/gene-info?gene=${geneSymbol}`);
        const data = await response.json();
        setGeneInfo(data);  // Store the received gene information
      } catch (error) {
        console.error('Error fetching gene info:', error);
      }
    };

    fetchGeneInfo();
  }, [geneSymbol]);

  if (!geneInfo) {
    return <p>Loading gene information...</p>;
  }

  return (
    <div className="GeneOntologyPage">
      <h1>Gene Ontology Information for {geneSymbol}</h1>
      {/* Render gene information here */}
      <p><strong>Gene Name:</strong> {geneInfo.gene_name}</p>
      <p><strong>Term Name:</strong> {geneInfo.term_name}</p>
      <p><strong>Description:</strong> {geneInfo.description}</p>
      {/* Add any other relevant information */}
    </div>
  );
}

export default GeneOntologyPage;
