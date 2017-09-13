import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import './Header.css';

import SearchButton from './SearchButton';

class App extends Component {

  render () {
    const { isLoggedIn } = this.props;

    let navbarRight = null;
      
    if (this.props.isLoggedIn) {
      navbarRight = 
        <ul className="nav navbar-nav navbar-right">
          <li><Link to="/logout"><i className="fa fa-sign-out" aria-hidden="true"></i> logout</Link></li>
          <SearchButton />
        </ul> 
    } else  { 
      navbarRight = 
      <ul className="nav navbar-nav navbar-right">
        <li><Link to="/login"><i className="fa fa-sign-in" aria-hidden="true"></i> login</Link></li>
        <li><Link to="/register"><i className="fa fa-user-plus" aria-hidden="true"></i> register</Link></li>
        <SearchButton />
      </ul>
    }

    return (
      <nav className="navbar navbar-default main-navbar">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="#">YonnBot</Link>
          </div>
          <ul className="nav navbar-nav">
            <li className="active"><Link to="/">Home</Link></li>
            <Link className="btn btn-default navbar-btn" to="/submit">
              <i className="fa fa-plus" aria-hidden="true"></i>{' '}
              New Item
            </Link>
          </ul>
          {navbarRight}
        </div>
      </nav>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: state.auth.isLoggedIn
  }
}

const Header = connect(mapStateToProps)(App);

export default Header;