import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import authActionCreators from '../../actions/authActionCreators';

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
      <div className="container">
        <div className="row">

          <div className="main">

            <form role="form" onSubmit={this._handleLogin}>
              <div className="form-group">
                <label htmlFor="">Username</label>
                <input type="text" className="form-control" ref="username" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" ref="password" />
              </div>
              <button type="submit" className="btn btn btn-primary">
                Log In
              </button>
              <div className="pull-right btn">
                <Link to="/register">Or register</Link>
              </div>
            </form>
          
          </div>
          
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
      dispatch(authActionCreators.loginUser(username, password));
    }
  }
}

const Login = connect(mapStateToProps, mapDispatchToProps)(App);

export default Login;