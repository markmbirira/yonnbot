import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

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
        <div className="row main-content">
          <div className="col-3 mobile-hidden"></div>
          <div className="col-6">
            <div className="login-form-container">
              <p className="login-form-title">
                <i className="fa fa-sign-in" aria-hidden="true"></i> Login
              </p>

              <form className="login-form" onSubmit={this._handleLogin}>
                <span className="login-form-icon-user"><i className="fa fa-user" aria-hidden="true"></i></span>
                <input type="text" name="username" ref="username" className="login-form-input-username" placeholder="username" required />
                <span className="login-form-icon-key"><i className="fa fa-key" aria-hidden="true"></i></span>
                <input type="password" name="password" ref="password" className="login-form-input-password" placeholder="password" required />
                <button className="login-form-button" type="submit" value="login">
                  <i className="fa fa-lock" aria-hidden="true"></i>
                </button>
                <div className="clear"></div>
              </form>

              <div className="register-link-section">
                No account? {' '}
                <button>
                  <Link to="/auth/register" className="register-link"> Register </Link>
                  <i className="fa fa-user-plus" aria-hidden="true"></i>
                </button>
              </div>
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