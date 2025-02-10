import React from 'react';
import './SouthAsia.css'; 

function SouthAsia() {  
  return (
    <div className="SouthAsia">
      <header className="page-header">
        <button className="home-button" onClick={() => alert('Home clicked')}>
          Home
        </button>
        <h1 className="header">South Asian Populations</h1>
      </header>

      <div className="country-list">
        <h2>India</h2>
        <p>India is a country in South Asia. It is the seventh-largest country by land area, and the second-most populous country.</p>
        
        <h2>Bangladesh</h2>
        <p>Bangladesh is a country in South Asia, located on the Bay of Bengal. It is known for its rich culture and natural beauty.</p>

        <h2>Pakistan</h2>
        <p>Pakistan is a country in South Asia. It shares borders with India, Afghanistan, China, and Iran, and has a rich history.</p>
      </div>
    </div>
  );
}

export default SouthAsia; 
