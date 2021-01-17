import './index.css';
import 'aos/dist/aos.css';
import AOS from 'aos/dist/aos';

import React from 'react';
import { render } from 'react-dom';

import { Router } from './routes';

import reportWebVitals from './reportWebVitals';

AOS.init();

render(
    <React.StrictMode>
        <Router />
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();