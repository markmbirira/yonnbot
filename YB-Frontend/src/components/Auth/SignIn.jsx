import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import authActionCreators from '../../actions/authActionCreators';


class App extends Component {
  constructor(props) {
    super(props);

    this._handleLogin = this._handleLogin.bind(this);
  }

  _handleLogin(event) {

    event.preventDefault();

    let username = this.refs.username.value;
    let password =  this.refs.password.value;

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

    const buttonStyle = {
      width: "100%",
      backgroundColor: "#2ab27b",
      border: "none",
      color: "#ffffff"
    }

    return (
      <div className="tab-pane fade in active" id="signin-form">
        <form className="form" onSubmit={this._handleLogin} style={{ marginTop: 30 }}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" className="form-control" ref="username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" ref="password" />
          </div>
          <button type="submit" className="btn btn-default btn-lg" style={buttonStyle}>Sign in</button>
        </form>
      </div>      
    );
  }
}

const mapStateToProps = (state, ownProps) => { return {}}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loginUser: (username, password) => {
      dispatch(authActionCreators.loginUser(username, password));
    }
  }
}

const Login = connect(mapStateToProps, mapDispatchToProps)(App);

export default Login;