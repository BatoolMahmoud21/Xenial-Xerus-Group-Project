import React from 'react';
import './App.css';
import EastAsianPage from './EastAsianPage';  // Import the East Asian component
import logo from './assets/logo.png';  // Import the logo

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} alt="Xenial Xerus Logo" className="logo" /> {/* Logo */}
        <h1 className="header">East Asian Populations</h1>
      </header>
      <EastAsianPage /> {/* Render the East Asia page */}
    </div>
  );
}

export default App;
