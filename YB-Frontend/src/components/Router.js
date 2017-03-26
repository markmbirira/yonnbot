import React from 'react';
import { Router, Route } from 'react-router';

import Home from './Home/Home';
import Comment from './Comment/Comment';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={Home} />
    <Route  path="post/:postId" component={Comment} />
  </Router>
);

export default Routes;