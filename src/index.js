import './index.css';

import React from 'react';
import { render } from 'react-dom';

import { Router } from './routes';

import reportWebVitals from './reportWebVitals';

render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();