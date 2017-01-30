import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import configureStore from './stores/configureStore'

import seedData from './data/seed.js'
import chartAdapt from './actions/chartAdapt'

import App from './App';
import './index.css';

let initialData = seedData();

const store = configureStore({list: initialData, displayLength: 10,
  filter: 'none', year: initialData[0].signUpDate.getFullYear(), month: null, stats: chartAdapt(initialData) })


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
