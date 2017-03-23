import React, { Component, PropTypes } from 'react';

class UserSignUp extends Component {
  constructor(props) {
    super(props);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(event) {
    event.target.preventDefault();
    let username = this.refs.username.value;
    let password = this.refs.password.value;

    if ((username !== "undefined" && password.length > 0) && (password !== "undefined" && password.length > 0 )) {
      this.props.loginUser(username, password); // shall dispatch loginUser(username, password)
    }
  }

  render() {
    return (
      <div className="user-signup">
        <div className="user-signup-form">
          <label>Or SignUp</label>
          <form className="">
            <label htmlFor="title">Username</label>
            <input className="form-control" type="text"  name="username" placeholder=" username" ref="username" required />
            <label htmlFor="url">email</label>
            <input className="form-control" type="email" name="email" placeholder=" email" ref="email" required />
            <label htmlFor="url">password</label>
            <input className="form-control" type="password" name="password" placeholder=" password" ref="password" required /> <br />
            <button className="" onClick={this._handleSubmit} >
              Sign Up
            </button>
          </form>
        </div>
        <p> Or signup with facebook </p>
        <button  className="user-signup-facebook-button">Facebook</button>
      </div>
    );
  }
}

UserSignUp.propTypes = {
  signupUser: PropTypes.func
}

export default UserSignUp;