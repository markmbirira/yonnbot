import React, { Component } from 'react';
import { connect } from 'react-redux';

import profileActionCreators from '../../actions/profileActionCreators';

import Header from '../Common/Header/Header';
import './Login.css';

class App extends Component {
  constructor(props) {
    super(props);

    this._handleLogin = this._handleLogin.bind(this);
  }

  _handleLogin(event) {
    event.preventDefault();
    let username = this.refs.username.value;
    let password =  this.refs.password.value;

    console.log('new post title is:', username);
    console.log('new post url is:', password);

    if (username.length > 0 && password.length > 0 ) {
      console.log('sending login dispatch');
      this.props.loginUser(username, password);
    } else {
      console.log('error sending new post');
    }
    this.refs.username.value = '';
    this.refs.password.value = '';
  }

  render () {
    return (
      <div className="main">
        <Header />
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <div className="login-form-container">
              <p className="login-form-title">Login to YonnBot</p>
              <form className="login-form" onSubmit={this._handleLogin}>
                <label>username</label>
                <input type="text" name="username" ref="username" className="login-form-username" required />
                <label>password</label>
                <input type="password" name="password" ref="password" className="login-form-password" required />
                <input type="submit" value="Login" />
              </form>
            </div>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loginUser: (username, password) => {
      dispatch(profileActionCreators.loginUser(username, password));
    }
  }
}

const Login = connect(mapStateToProps, mapDispatchToProps)(App);

export default Login;