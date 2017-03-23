import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import profileActionCreators  from '../../actions/profileActionCreators';
console.log('profileActionCreators are ', profileActionCreators);

import Header from '../Common/Header/Header';
import Post from '../Common/Post/Post';
import ProfileSideBar from './ProfileSideBar';
import User from '../User/User';
// import Footer from '../Common/Footer/Footer';

import './Profile.css';

class App extends Component {
  constructor (props) {
    super(props);
    console.log('props in Profile are ', this.props);
    this._renderSideBar = this._renderSideBar.bind(this);
  }

  _renderSideBar() {
    if (this.props.loggedIn) {
      return <ProfileSideBar />
    } else {
      return <User 
                loginUser={this.props.loginUser} 
                signupUser={this.props.signupUser} 
              />
    }
  }

  render() {
    return (
      <div className="wrapper">
        <Header />

        <div className="main-content">
          <Post />
          {
            this._renderSideBar()
          }

          <div className="clear"></div>
        </div>

        {this.props.children}

      </div>
    );
  }
}

App.propTypes =  {
  username: PropTypes.string,
  loggedIn: PropTypes.bool,
  created: PropTypes.string,
  loginUser: PropTypes.func,
  signupUser: PropTypes.func,
  logoutUser: PropTypes.func
}

const mapStateToProps = (state) => {
  return {
   username: state.profile.username,
   joined: state.profile.joined,
   loggedIn: state.profile.loggedIn
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (username, password) => {
      dispatch(profileActionCreators.loginUser(username, password));
    },
    signupUser: (username, password) => {
      dispatch(profileActionCreators.signupUser(username, password));
    },
    logoutUser: () => {
      dispatch(profileActionCreators.logoutUser());
    }
  }
};

const Profile = connect(mapStateToProps, mapDispatchToProps)(App);

export default Profile;
