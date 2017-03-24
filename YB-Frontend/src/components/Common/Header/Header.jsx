import React, { Component } from 'react';
import { Link } from 'react-router';

import './Header.css';

export default class Header extends Component {
  render () {
    return (
      <header className="header">
        <div className="header-left">
          <a id="yonnbot" href="/" title="Yonnbot">YB</a> {' '}
          <span className="headerlinks">
            <input type="text" className="header-search" />
            <input type="submit" className="" value="search" />
          </span>
        </div>

        <div className="header-right">
          <span className="headerlinks">
            <Link to="/">feed</Link> {' '}
            <Link to="/channels">channels</Link> {' '}
            <Link to="/profile">profile</Link> {' '}
          </span>
        </div>

        <div className="clear"></div>
      </header>
    );
  }
};
