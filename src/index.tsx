import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import dateFnsLocalizer from 'react-widgets-date-fns';

import './app/layout/styles.css'
import 'react-toastify/dist/ReactToastify.css';
import 'react-widgets/dist/css/react-widgets.css';

import * as serviceWorker from './serviceWorker'

import App from './app/layout/App'
import ScrollToTop from './app/layout/ScrollToTop'

dateFnsLocalizer()

export const history = createBrowserHistory()

ReactDOM.render(
  <Router history={history}>
    <ScrollToTop />
    <App />
  </Router>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
