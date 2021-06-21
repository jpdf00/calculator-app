import React from 'react';
import ReactDOM from 'react-dom';
// Disabling Linters for the next 2 lines because they are just setting up for the future.
/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import Big from 'big.js';
/* eslint-enable no-unused-vars */
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
