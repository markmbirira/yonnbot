import React from 'react';
import { Router, Route } from 'react-router';

import App from './Feed/Feed';
import Channel from './Channel/Channel';
// import NotFound from './components/NotFound';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path="/feed" component={App} />
    <Route path="/channels" component={Channel} />
  </Router>
);

export default Routes;