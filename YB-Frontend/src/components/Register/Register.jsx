import React, { Component } from 'react';
import { connect } from 'react-redux';

import profileActionCreators from '../../actions/profileActionCreators';

import Header from '../Common/Header/Header';
import './Register.css';

class App extends Component {
  constructor(props) {
    super(props);

    this._handleRegister = this._handleRegister.bind(this);
  }

  _handleRegister(event) {
    event.preventDefault();
    let username = this.refs.username.value;
    let password =  this.refs.password.value;
    let email = this.refs.email.value;

    console.log('new username is:', username);
    console.log('new email is:', email);
    console.log('new password is:', password);

    if (username.length > 0 && password.length > 0 && email.length > 0 ) {
      console.log('sending register new user');
      this.props.registerUser(username, email, password);
    } else {
      console.log('error sending new post');
    }
    this.refs.username.value = '';
    this.refs.email.value= '';
    this.refs.password.value = '';
  }


  render () {
    return (
      <div className="main">
        <Header />
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <div className="register-form-container">
              <p className="register-form-title">Register to YonnBot</p>
              <form className="register-form" onSubmit={this._handleRegister}>
                <label>username</label>
                <input type="text" name="username" ref="username" className="register-form-username" required />
                <label>email</label>
                <input type="text" name="email" ref="email" className="register-form-email" required />
                <label>password</label>
                <input type="password" name="password" ref="password" className="register-form-password" required />
                <input type="submit" value="Register" />
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
    registerUser: (username, email, password) => {
      dispatch(profileActionCreators.registerUser(username, email, password));
    }
  }
}

const Register = connect(mapStateToProps, mapDispatchToProps)(App);

export default Register;