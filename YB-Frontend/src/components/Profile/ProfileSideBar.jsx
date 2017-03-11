import React, { Component } from 'react';

import ProfileAvatar from './ProfileAvatar';
import ProfileDetails from './ProfileDetails';
import ProfileSideBarNavBar from './ProfileSideBarNavbar';
// import ProfileForm from './ProfileForm';


export default class ProfileSideBar extends Component {
  render() {
    
    return (
      <div className="profile-sidebar">
        <ProfileAvatar />
        <ProfileSideBarNavBar /> {/* this shall mount ProfileForm as modal and Social Links */}
        <ProfileDetails />
        {this.props.children}
      </div>
    );
  }
}