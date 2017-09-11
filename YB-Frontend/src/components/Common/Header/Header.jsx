import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class App extends Component {

  render () {
    const { isLoggedIn } = this.props;
    let navbarRight = null;
      
    if (this.props.isLoggedIn) {
      navbarRight = 
        <ul className="nav navbar-nav navbar-right">
          <li><Link to="/logout"><span className="glyphicon glyphicon-log-out"></span> logout</Link></li>  
        </ul> 
    } else  { 
      navbarRight = 
      <ul className="nav navbar-nav navbar-right">
        <li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span> login</Link></li>
        <li><Link to="/register"><span className="glyphicon glyphicon-user-sign-in"></span> register</Link></li> 
      </ul>
    }

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