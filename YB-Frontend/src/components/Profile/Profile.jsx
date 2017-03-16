import React, { Component } from 'react';

import Header from '../Common/Header/Header';
import Post from '../Common/Post/Post';
import ProfileSideBar from './ProfileSideBar';
import Footer from '../Common/Footer/Footer';

import './Profile.css';

class Profile extends Component {
  render() {
    return (
      <div className="main-app">
        <Header />

        <div>
          <div className="col-md-2"></div>
          <div className="col-md-7 main-content">
            <Post />
          </div>

          <div className="col-md-3 main-content">
            <ProfileSideBar />
          </div>
        </div>
        
        <Footer />

        {this.props.children}

      </div>
    );
  }
}

export default Profile;
