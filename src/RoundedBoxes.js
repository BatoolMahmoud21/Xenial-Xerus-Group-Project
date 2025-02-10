
import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const RoundedBoxes = () => {
  return (
    <div className="container">
      {/* Use Link for navigation */}
      <Link to="/south-asia" className="box">SouthAsia</Link>
      <Link to="/east-asia" className="box">EastAsia</Link>
    </div>
  );
};

export default RoundedBoxes;


