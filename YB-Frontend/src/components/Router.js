import React from 'react';
import { Router, Route } from 'react-router';

import App from './Feed/Feed';
import Channel from './Channel/Channel';
import Profile from './Profile/Profile';
import ProfileForm from './Profile/ProfileForm';
import ProfileSocial from './Profile/ProfileSocial';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
      <Route path="channels" component={Channel} />
      <Route path="profile" component={Profile} >
        <Route path="settings" component={ProfileForm} />
        <Route path="social" component={ProfileSocial} />
      </Route>
  </Router>
);

export default Routes;