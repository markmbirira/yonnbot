import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import './Header.css';

import SearchButton from './SearchButton';

class App extends Component {


  render () {

    const { isLoggedIn } = this.props;

    let navbarRight = () => {

      if (isLoggedIn) {
        return (
          <ul className="nav navbar-nav navbar-right">
            <Link to="/logout" className="btn btn-default navbar-btn">
              Logout <i className="fa fa-sign-out" aria-hidden="true"></i>{' '}
            </Link>
            <SearchButton />
          </ul>
        );
      } else {
        return (
          <ul className="nav navbar-nav navbar-right">
            <li></li>
            <SearchButton />
          </ul>
        );
      }

    }
    
    return (
      <nav className="navbar navbar-default main-navbar">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to="/">YonnBot</Link>
          </div>
          <div id="main-navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li className="active"><Link to="/">Home</Link></li>
              <Link className="btn btn-default navbar-btn" to="/submit">
                <i className="fa fa-plus" aria-hidden="true"></i>{' '}
                New Item
              </Link>
            </ul>
            { navbarRight() }
          </div>
          {/* nav-collapse */}
        </div>
        {/* container-fluid */}
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