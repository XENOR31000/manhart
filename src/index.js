import React, {StrictMode} from 'react';
import {BrowserRouter} from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App.js';



const root = ReactDOM.createRoot( document.getElementById('root'));
root.render (
  <>

  <StrictMode>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
  </StrictMode>
  </>

)
