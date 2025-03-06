import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // To access dynamic params from the URL

function GeneOntologyPage() {
  const { geneSymbol } = useParams(); // Extract geneSymbol from URL
  const [geneInfo, setGeneInfo] = useState(null);

  useEffect(() => {
    // Fetch gene ontology information from Flask API
    const fetchGeneInfo = async () => {
      try {
        console.log('Fetching data for gene:', geneSymbol);
        const response = await fetch(`/api/gene/gene-info/${geneSymbol}`);
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
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Ontology Information for {geneSymbol}</h1>
      
      <div className="mb-6 p-4 bg-gray-50 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Gene Information</h2>
        <p><strong>Gene Name:</strong> {geneInfo.gene_name}</p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Ontology Terms</h2>
        {geneInfo.ontology_terms && geneInfo.ontology_terms.length > 0 ? (
          geneInfo.ontology_terms.map((term, index) => (
            <div key={index} className="p-4 border rounded-lg mb-4">
              <p className="mb-2"><strong>Term:</strong> {term.term_name}</p>
              <p><strong>Description:</strong> {term.description}</p>
            </div>
          ))
        ) : (
          <p>No ontology terms available for this gene.</p>
        )}
      </div>
    </div>
  );
}

export default GeneOntologyPage;
