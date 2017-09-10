import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Header extends Component {

  render () {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="#">YonnBot</Link>
          </div>
          <ul className="nav navbar-nav">
            <li className="active"><Link to="/">Home</Link></li>
            <li><Link to="/submit">Submit</Link></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li><Link to="/auth/login"><span className="glyphicon glyphicon-log-in"></span> login</Link></li>
            <li><Link to="/auth/register"><span className="glyphicon glyphicon-user-sign-in"></span> register</Link></li>
            <li><Link to="/auth/logout"><span className="glyphicon glyphicon-log-out"></span> logout</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
};
