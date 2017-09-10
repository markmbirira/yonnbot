import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

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
      <div className="container">
        <div className="row">

          <div className="main">

            <form role="form" onSubmit={this._handleRegister}>
              <div className="form-group">
                <label htmlFor="">Username</label>
                <input type="text" className="form-control" ref="username" />
              </div>
              <div className="form-group">
                <label htmlFor="">Email</label>
                <input type="text" className="form-control" ref="email" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" ref="password" />
              </div>
              <button type="submit" className="btn btn btn-primary">
                Log In
              </button>
              <div className="pull-right btn">
                <Link to="/auth/login">Or login</Link>
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
    registerUser: (username, email, password) => {
      dispatch(profileActionCreators.registerUser(username, email, password));
    }
  }
}

const Register = connect(mapStateToProps, mapDispatchToProps)(App);

export default Register;