import React, { Component } from 'react';

class UserLogin extends Component {

  render() {
    return (
      <div className="user-login">
        <p>Login to YonnBot</p>
        <form className="form-group user-login-form">
          <p htmlFor="title">Username</p>
          <input className="form-control" type="text"  name="username" placeholder=" username" ref="username" required />
          <p htmlFor="url">password</p>
          <input className="form-control" type="password" name="password" placeholder=" password" ref="password" required /> <br />
          <button className="btn btn-md btn-default form-control" >
            <span class="glyphicon glyphicon-login"></span> Login
          </button>
        </form>
      </div>
    );
  }
}

UserLogin.propTypes = {
  
}

export default UserLogin;