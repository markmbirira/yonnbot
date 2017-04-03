import React from 'react';
import { Router, Route } from 'react-router';

import Home from './Home/Home';
import Comment from './Comment/Comment';
import Register from './Register/Register';
import Login from './Login/Login';
import Submit from './Submit/Submit';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={Home} />
    <Route path="/post/submit" component={Submit} />
    <Route path="/post/:postId/:title" component={Comment} />
    <Route path="/auth/login" component={Login} />
    <Route path="/auth/register" component={Register} />
  </Router>
);

export default Routes;