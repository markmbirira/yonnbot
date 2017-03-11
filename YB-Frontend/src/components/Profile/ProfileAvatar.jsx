import React, { Component } from 'react';


export default class ProfileAvatar extends Component {
  render() {
    return (
      <div className="profile-avatar">
        <img className="thumbnail" src={'/img/profile-avatar.jpg'} alt="profile-avatar"/>
      </div>
    );
  }
}