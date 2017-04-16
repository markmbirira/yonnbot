import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store/store';
import { browserHistory } from 'react-router';
import Routes from './components/Router';

// import 'bootstrap/dist/css/bootstrap.css'; 
import 'animate.css';
import './styles/index.css';



ReactDOM.render(
  <Provider store={store} >
    <Routes history={browserHistory} />
  </Provider>,
  document.getElementById('root')
);
