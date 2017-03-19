import React, { Component } from 'react';

import Header from '../Common/Header/Header';
import Post from '../Common/Post/Post';
import ProfileSideBar from './ProfileSideBar';
import User from '../User/User';
import Footer from '../Common/Footer/Footer';

import './Profile.css';

class Profile extends Component {
  constructor (props) {
    super(props);
    this._renderSideBar = this._renderSideBar.bind(this);
  }

  _renderSideBar() {
    if (this.props.isLoggedIn) {
      return <ProfileSideBar />
    } else {
      return <User />
    }
  }

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
            {
              this._renderSideBar()
            }
          </div>
        </div>
        
        <Footer />

        {this.props.children}

      </div>
    );
  }
}

export default Profile;
