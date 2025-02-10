import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './Main';  // Import Main instead of Home

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Main />  // Render Main component
  </React.StrictMode>
);