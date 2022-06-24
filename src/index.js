import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { StateContextProvider } from './context/StateContextProvider';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StateContextProvider>
    <App />
  </StateContextProvider>
);