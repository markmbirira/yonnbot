/*
  This is imported and used in <Profile /> to Replace <ProfileSidebar />
*/

import React, { Component } from 'react';

import UserLogin from './UserLogin';
import UserSignUp from './UserSignUp';
import UserToolTip from './UserToolTip';

import './User.css';

class User extends Component {
  render() {
    return (
      <div className="user-sidebar">
        <UserLogin />
        <UserSignUp />
        <UserToolTip />
      </div>
    );
  }
}

export default User;
