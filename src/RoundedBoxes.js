
import React from 'react';
import { Link } from 'react-router-dom';  

const RoundedBoxes = () => {
  return (
    <div className="container">
     
      <Link to="/south-asia" className="box">SouthAsia</Link>
      <Link to="/east-asia" className="box">EastAsia</Link>
    </div>
  );
};

export default RoundedBoxes;


