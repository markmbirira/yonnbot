import React, { Component } from 'react';

class UserSignUp extends Component {

  render() {
    return (
      <div className="user-signup">
        <div className="user-signup-form">
          <p>Or SignUp</p>
          <form className="form-group">
            <p htmlFor="title">Username</p>
            <input className="form-control" type="text"  name="username" placeholder=" username" ref="username" required />
            <p htmlFor="url">email</p>
            <input className="form-control" type="email" name="email" placeholder=" email" ref="email" required />
            <p htmlFor="url">password</p>
            <input className="form-control" type="password" name="password" placeholder=" password" ref="password" required /> <br />
            <button className="btn btn-md btn-default form-control" >
              <span class="glyphicon glyphicon-login"></span> Sign Up
            </button>
          </form>
        </div>
        <p> Or signup with facebook </p>
        <button  className="btn btn-md btn-info form-control user-signup-facebook-button">
           <span className="glyphicon glyphicon-globe"></span> Facebook
        </button>
      </div>
    );
  }
}

UserSignUp.propTypes = {
  
}

export default UserSignUp;