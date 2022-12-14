import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.js';
import "@blueprintjs/core/lib/css/blueprint.css";
import '@blueprintjs/icons/lib/css/blueprint-icons.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
