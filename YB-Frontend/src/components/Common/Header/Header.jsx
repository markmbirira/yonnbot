import React, { Component } from 'react';
import { Link } from 'react-router';

import './Header.css';

export default class Header extends Component {
  render () {
    return (
      <header className="header col-12">
        <div className="header-left">
          <a id="yonnbot" href="/" title="Yonnbot">YB</a> {' '}
          <div className="search-top">
            <form method="POST" className="search-form">
              <input type="text" placeholder=" search YonnBot" name="q" />
              <button type="submit" className="btn-important">
               search
              </button>
            </form>
          </div>
        </div>

        <div className="header-right">
          <span className="headerlinks">
            <Link to="/">submit</Link> {' '}
            <Link to=".">login</Link> {' '}
          </span>
        </div>

        <div className="clear"></div>
      </header>
    );
  }
};
