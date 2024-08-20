import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app.mjs';

console.log('Hydrating root...');
ReactDOM.hydrateRoot(document.getElementById('root'), <App />);

