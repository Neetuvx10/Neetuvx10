import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css'; // Import the global CSS
import App from './App';

// This renders the App component and inserts it into the "root" element of the HTML page
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // The "root" div is defined in public/index.html
);
