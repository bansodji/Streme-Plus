import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter } from 'react-router-dom';
import { AllMovieContext } from './context/AllMovieContext.jsx';
import { AllTVContext } from './context/AllTVContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AllMovieContext>
    <AllTVContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AllTVContext>
  </AllMovieContext>,
)
