import React, { Component } from 'react';


export default class ProfileDetails extends Component {
  render() {
    return (
      <div className="profile-details">
        <p className="profile-details-username">user404</p>
        <p className="profile-details-created">Joined {'Feb 2017'}</p>
        <p className="profile-details-bio">
          I am that internet user here on YonnBot. 
          Most cool things I use are provided 
          by the community, so I always share 
          links and scroll through the 
          posts to quickly brainstorm and share my views. <br />
          Profile URL: http://localhost:3000/user/user404
        </p>
      </div>
    );
  }
}