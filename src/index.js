import React from 'react';
import ReactDOM from 'react-dom';
// Disabling Linters for the next 2 lines because they are just setting up for the future.
/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import Big from 'big.js';
/* eslint-enable no-unused-vars */
import './index.css';
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
