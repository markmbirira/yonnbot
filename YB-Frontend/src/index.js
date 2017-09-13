import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import { browserHistory } from 'react-router';

import Routes from './components/Router';

import 'jquery/src/jquery';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.css';


ReactDOM.render(
  <Provider store={store} >
    <Routes history={browserHistory} />
  </Provider>,
  document.getElementById('root')
);
