import React, { Component } from 'react';

export default class LoginRegisterForm extends Component {
  constructor(props) {
    super(props);

    this._handleLoginSubmit = this._handleLoginSubmit.bind(this);
    this._handleRegisterSubmit = this._handleRegisterSubmit.bind(this);
  }

  _handleLoginSubmit(event) {
    event.preventDefault();
    let username = this.refs.login_username.value;
    let password =  this.refs.login_password.value;

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

  _handleRegisterSubmit(event) {
    event.preventDefault();
    let username = this.refs.register_username.value;
    let password =  this.refs.register_password.value;
    let role = "member";

    console.log('new username is:', username);
    console.log('new password is:', password);
    console.log('new role is ', role);

    if (username.length > 0 && password.length > 0 && role.length > 0 ) {
      console.log('sending register new user');
      this.props.registerUser(username, password, role);
    } else {
      console.log('error sending new post');
    }
    this.refs.register_username.value = '';
    this.refs.register_password.value = '';
  }

  render () {
    return (
      <div className="submit-form col-12">
        <div>Login</div>
        <form className="submit-form-form" onSubmit={this._handleLoginSubmit}>
          <input type="text" name="username" ref="login_username" placeholder=" username" required /> <br />
          <input type="password" name="password" ref="login_password" placeholder=" password " required /> <br />
          <input type="submit" className="" value="submit"  />
        </form>

        <div>or Register</div>
        <form className="submit-form-form" onSubmit={this._handleRegisterSubmit}>
          <input type="text" name="register_username" ref="register_username" placeholder=" username" required /> <br />
          <input type="password" name="register_password" ref="register_password" placeholder=" password" required /> <br />
          <input type="submit" className="" value="submit"  />
        </form>
      </div>
    );
  }
}