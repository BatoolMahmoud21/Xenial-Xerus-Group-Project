import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PopulationPage = () => {
  const { PopulationName, rs_id } = useParams();  // Capture PopulationName and rs_id from URL
  const [populationInfo, setPopulationInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPopulationInfo = async () => {
      try {
        const response = await fetch(`/api/gene/population-info/${PopulationName}/${rs_id}`);
        const data = await response.json();
        if (Array.isArray(data)) {
          setPopulationInfo(data);  // Set the specific SNP data for this population and rs_id
        } else {
          setError('No data found for the population and SNP.');
        }
      } catch (error) {
        setError('Failed to fetch population data');
      } finally {
        setLoading(false);
      }
    };

    fetchPopulationInfo();
  }, [PopulationName, rs_id]);  // Re-run effect when either PopulationName or rs_id changes

  if (loading) return <p>Loading information...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Population Information for {PopulationName}</h1>
      {populationInfo.length === 0 ? (
        <p>No data available for this population.</p>
      ) : (
        populationInfo.map((info, index) => (
          <div key={index}>
            <h3>rs ID: {info.rs_id}</h3>
            <p>Region: {info.Region}</p>
            <p>Specific Region: {info['Specific Region']}</p>
            <p>Participants: {info.Participants}</p>
            <p>Gender: {info.Gender}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default PopulationPage;
