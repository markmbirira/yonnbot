/*
  This is imported and used in <Profile /> to Replace <ProfileSidebar />
*/

import React, { Component, PropTypes } from 'react';

import UserLogin from './UserLogin';
import UserSignUp from './UserSignUp';

import './User.css';

class User extends Component {
  
  render() {
    return (
      <div className="user-sidebar">
        <UserLogin loginUser={this.props.loginUser} />
        <hr />
        <UserSignUp signupUser={this.props.signupUser} />
        <div className="user-tooltip">
          <p>
            You need to be signed in to 
            submit new links, personalize 
            your feed and create  a profile.
            Provide an email for password recovery.
          </p>
        </div>
      </div>
    );
  }
}

User.propTypes = {
  loginUser: PropTypes.func,
  signupUser: PropTypes.func
}

export default User;
