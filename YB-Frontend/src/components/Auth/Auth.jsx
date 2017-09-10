import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Auth extends  Component {

  render() {
    return (
      <div className="jumbotron">

        <button class="btn btn-lg btn-success">
          <Link to="auth/login" />
        </button>

        <button class="btn btn-lg btn-success">
          <Link to="auth/register" />
        </button>

        {this.props.children}
      </div>
    );
  }
}