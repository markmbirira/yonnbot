import React, { Component } from 'react';
import { Link } from 'react-router';
import $ from 'jquery';

import './Header.css';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this._hideShowNavBarOnScroll = this._hideShowNavBarOnScroll.bind(this);
  }

  componentDidMount() {
    this._hideShowNavBarOnScroll();
  }

  _hideShowNavBarOnScroll() {
    $(window).scroll(
      {
        previousTop: 0
      }, 
      function () {
        var currentTop = $(window).scrollTop();
        if (currentTop < this.previousTop) {
            $(".header").show();
        } else {
            $(".header").hide();
        }
        this.previousTop = currentTop;
      });
  }

  render () {
    return (
      <header className="header col-12">
        <div className="">
          <h1 className="header-logo"><a className="yonnbot-logo" href="/" title="YonnBot">YONNBOT</a></h1> {' '}
          <nav className="header-nav">
            <ul>
              <li className="post-submit">
                <Link to="/post/submit" className="post-submit-link">submit <i className="fa fa-external-link" aria-hidden="true"></i> </Link>
              </li>
              <li className="user-dropdown">
                <a href="#" className="user-dropdown-button">
                  <i className="fa fa-user-o" aria-hidden="true"></i> {' '}
                  <i className="fa fa-caret-down" aria-hidden="true"></i> 
                </a>
                <span className="user-dropdown-content">
                  <Link to="/auth/login"><i className="fa fa-sign-in" aria-hidden="true"></i> Login</Link>
                  <Link to="/auth/register"><i className="fa fa-user-plus" aria-hidden="true"></i> register</Link>
                  <Link to="#"><i className="fa fa-sliders" aria-hidden="true"></i> dashboard</Link>
                  <Link to="#" className="logout-link"><i className="fa fa-times" aria-hidden="true"></i> logout</Link>
                </span>
              </li>
              <li><i className="fa fa-search" aria-hidden="true"></i></li>
            </ul>
          </nav>
          <div className="clear"></div>
        </div>
      </header>
    );
  }
};
