import React, { useState } from 'react';

function SouthAsianPage() {
  // State to hold the country information
  const [countryInfo, setCountryInfo] = useState(null);

  // Function to update country info based on the selected country
  const handleCountrySelect = (country) => {
    const countryDetails = {
      India: "India is a country in South Asia. It is the seventh-largest country by land area, and the second-most populous country.",
      Bangladesh: "Bangladesh is a country in South Asia, located on the Bay of Bengal. It is known for its rich culture and natural beauty.",
      Pakistan: "Pakistan is a country in South Asia. It shares borders with India, Afghanistan, China, and Iran, and has a rich history."
    };

    setCountryInfo(countryDetails[country]);
  };

  return (
    <div className="SouthAsianPage">
      <div className="dropdowns">
        <details>
          <summary onClick={() => handleCountrySelect('India')}>India</summary>
          {countryInfo && countryInfo === 'India' && <p>{countryInfo}</p>}
        </details>
        <details>
          <summary onClick={() => handleCountrySelect('Bangladesh')}>Bangladesh</summary>
          {countryInfo && countryInfo === 'Bangladesh' && <p>{countryInfo}</p>}
        </details>
        <details>
          <summary onClick={() => handleCountrySelect('Pakistan')}>Pakistan</summary>
          {countryInfo && countryInfo === 'Pakistan' && <p>{countryInfo}</p>}
        </details>
      </div>
    </div>
  );
}

export default SouthAsianPage;
