import React from 'react';
import './App.css';
import SouthAsianPage from './SouthAsianPage';  // Import your South Asian component

function App() {
  return (
    <div className="App">
      <header>
        <button className="home-button" onClick={() => alert('Home clicked')}>
          Home
        </button>
        <h1 className="header">South Asian Populations</h1>
      </header>

      <div>
        {/* Render your South Asia Page */}
        <SouthAsianPage />
      </div>
    </div>
  );
}

export default App;
