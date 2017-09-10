import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import Home from './Home/Home';
import Container from './Container/Container';
import Comment from './Comment/Comment';
import Auth from './Auth/Auth';
import Register from './Auth/Register';
import Login from './Auth/Login';
import Logout from './Auth/Logout';
import Submit from './Submit/Submit';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={Container}>

      <IndexRoute component={Home} />

      <Route path="/submit" component={Submit} />
      <Route path="/post/:postId/:title" component={Comment} />

      <Route path="/auth" component={Auth} >
        <Route path="login" component={Login} />
        <Route path="register" component={Register} />
        <Route path="logout" component={Logout} />
      </Route>

    </Route>
  </Router>
);

export default Routes;