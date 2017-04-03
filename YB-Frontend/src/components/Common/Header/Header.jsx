import React, { Component } from 'react';
import { Link } from 'react-router';

import './Header.css';

export default class Header extends Component {
  render () {
    return (
      <header className="header col-12">
        <div className="header-left">
          <a className="yonnbot-logo" href="/" title="YonnBot">YB</a> {' '}
          <div className="header-links-left">
            
          </div>
        </div>

        <div className="header-right">
          <span className="header-links-right">
            <Link className="." to="."> top </Link> {' '}
            <Link to="."> new </Link> {' '}
            <Link to="/post/submit">submit</Link> {' '}
            <Link to="/auth/login">login</Link> {' '}
            <Link to="/auth/register">register</Link> {' '}
          </span>
        </div>

        <div className="clear"></div>
      </header>
    );
  }
};
