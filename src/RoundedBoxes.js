//import the libraries
import React from 'react';
import { Link } from 'react-router-dom';  

//defines functional component which renders links called South Asia and East Asia that links to the east and south asia js pages
const RoundedBoxes = () => {
  return (
    <div className="container">
     
      <Link to="/south-asia" className="box">SouthAsia</Link>
      <Link to="/east-asia" className="box">EastAsia</Link>
    </div>
  );
};

export default RoundedBoxes;


