import React, { Component, PropTypes } from 'react';

class UserLogin extends Component {
  constructor(props) {
    super(props);
    this._handleLogin = this._handleLogin.bind(this);
  }

  _handleLogin(event) {
    event.preventDefault();
    let username = this.refs.username.value;
    let password = this.refs.password.value;

    if ((username !== "undefined" && password.length > 0) && (password !== "undefined" && password.length > 0 )) {
      this.props.loginUser(username, password); // shall dispatch loginUser(username, password)
    }
  }

  render() {
    return (
      <div className="user-login">
        <p>Login to YonnBot</p>
        <form className="form-group user-login-form">
          <label htmlFor="title">Username</label>
          <input className="form-control" type="text"  name="username" placeholder=" username" ref="username" required />
          <label htmlFor="url">password</label>
          <input className="form-control" type="password" name="password" placeholder=" password" ref="password" required /> <br />
          <button className="btn btn-md btn-default form-control" onClick={this._handleLogin}>
            Login
          </button>
        </form>
      </div>
    );
  }
}

UserLogin.propTypes = {
  loginUser: PropTypes.func,
}

export default UserLogin;