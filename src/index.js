import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import MovieContextProvider from './Store/MovieManiaContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>  
    <MovieContextProvider>
    <App />
    </MovieContextProvider>
  </React.StrictMode>
);

