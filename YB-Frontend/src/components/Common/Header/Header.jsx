import React, { Component } from 'react';
import { Link } from 'react-router';

import './Header.css';

export default class Header extends Component {
  render () {
    return (
      <header className="header col-12">
        <div className="header-left">
          <h1><a className="yonnbot-logo" href="/" title="YonnBot">YONNBOT</a></h1> {' '}
          <div className="header-links-left">
            
          </div>
        </div>

        <div className="header-right">
          <span className="header-links-right">
             <button>Search</button>
            <button><Link to="/post/submit">submit</Link></button> {' '}
            <button><Link to="/auth/login">login</Link></button> {' '}
          </span>
        </div>

        <div className="clear"></div>
      </header>
    );
  }
};
