import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import WebFont from 'webfontloader';
import App from './App';

WebFont.load({
  google: {
    families: ['Poppins:300,400,600,700', 'sans-serif'],
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
