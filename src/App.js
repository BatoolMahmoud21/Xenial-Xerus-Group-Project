import React from 'react';
import './App.css';
import SouthAsianPage from './SouthAsianPage';  // Import your South Asian component

function App() {
  return (
    <div className="App">
      <header>
        <h1 className="header">Home</h1>
        <button className="home-button" onClick={() => alert('Home clicked')}>
          Home
        </button>
      </header>

      <div>
        {/* Render your South Asia Page */}
        <SouthAsianPage />
      </div>
    </div>
  );
}

export default App;
