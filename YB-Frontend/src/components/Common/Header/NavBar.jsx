import React, { Component } from 'react';
import { Link } from 'react-router';

import SearchForm from './SearchForm';

export default class NavBar extends Component {

  render () {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to="/">YB</Link>
          </div>

          <div className="collapse navbar-collapse" id="navbar-collapse">
            <ul className="nav navbar-nav">
              <li><Link to="/feed">Feed</Link></li>
              <li><Link to="/channels">Channels</Link></li>
            </ul>
            
            <SearchForm />

            </div> {/* navbar collapse */}
          </div> {/* container-fluid */}
        </nav>
    );
  }

}