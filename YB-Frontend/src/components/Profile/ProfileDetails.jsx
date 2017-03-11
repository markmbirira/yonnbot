import React, { Component } from 'react';


export default class ProfileDetails extends Component {
  render() {
    return (
      <div className="profile-details">
        <p className="profile-details-username">username</p>
        <p className="profile-details-created">joined Feb 2017</p>
        <p className="profile-details-bio">
          I am an idle sucker here on YonnBot expecting everything
          cool to be provided by the community. I share often and scroll
          through the posts to quickly brainstorm. I am idle again,
          after typing-in this bio :-)
        </p>
      </div>
    );
  }
}