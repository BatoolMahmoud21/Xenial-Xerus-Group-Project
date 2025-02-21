
import React from 'react';
import { Link } from 'react-router-dom';  

const RoundedBoxes = () => {
  return (
    <div className="container">
     
      <Link to="/south-asia" className="box">South Asia</Link>
      <Link to="/east-asia" className="box">East Asia</Link>
    </div>
  );
};

export default RoundedBoxes;


