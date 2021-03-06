import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App.jsx';
import store from './store';

import styles from './assets/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)