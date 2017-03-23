import React from 'react';
import { Router, Route } from 'react-router';

import Feed from './Feed/Feed';
import Comment from './Comment/Comment';
import Channel from './Channel/Channel';
import Profile from './Profile/Profile';
import ProfileForm from './Profile/ProfileForm';
import ProfileSocial from './Profile/ProfileSocial';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={Feed} >
    </Route>
      <Route path="channels" component={Channel}>
        <Route  path="post/:postId" component={Comment} />
      </Route>
      <Route path="profile" component={Profile} >
        <Route path="settings" component={ProfileForm} />
        <Route path="social" component={ProfileSocial} />
        <Route  path="post/:postId" component={Comment} />
      </Route>
      <Route path="/page/:page" component={Feed} />
      <Route  path="post/:postId" component={Comment} />
  </Router>
);

export default Routes;